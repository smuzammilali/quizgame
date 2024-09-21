import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Progress, Text, VStack } from '@chakra-ui/react';
import { fetchQuestions, setResults } from '../../store/slices/quizSlice';

export const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions = [], config = {} } = useSelector((state) => state.quiz);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0); // Track correct answers
  const [timeLeft, setTimeLeft] = useState(config.time || 60);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (timeLeft <= 0) {
      handleEndQuiz();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!config || questions.length === 0) {
    return <Text>Loading...</Text>; 
  }

  if (!currentQuestion) {
    return <Text>No questions available</Text>; 
  }

  function handleAnswer(selectedAnswer) {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setCorrectAnswers((prev) => prev + 1); 
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1); 
    } else {
      handleEndQuiz(); 
    }
  }

  function handleEndQuiz() {
    dispatch(setResults({
      correctAnswers,
      totalQuestions: questions.length,
      timeTaken: config.time - timeLeft,
    }));
    
    navigate('/results');
  }

  return (
    <Box>
      <VStack spacing="4">
        <Text>Question {currentQuestionIndex + 1} of {questions.length}</Text>

        <Progress
          value={((currentQuestionIndex + 1) / questions.length) * 100}
          size="lg"
          colorScheme="blue"
          width="100%"
        />

        <Text><span dangerouslySetInnerHTML={{__html:currentQuestion.question}}/></Text>

        {currentQuestion.type === 'boolean' ? (
          <VStack>
            <Button onClick={() => handleAnswer('True')}>True</Button>
            <Button onClick={() => handleAnswer('False')}>False</Button>
          </VStack>
        ) : (
          <VStack>
            {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((answer, index) => (
              <Button key={index} onClick={() => handleAnswer(answer)}>
                {answer}
              </Button>
            ))}
          </VStack>
        )}

        <Text>Time Left: {timeLeft}s</Text>

        <Button onClick={handleEndQuiz} colorScheme="red">End Quiz</Button>
      </VStack>
    </Box>
  );
};

export default QuizPage;

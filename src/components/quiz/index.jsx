import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack, Progress } from '@chakra-ui/react';
import { clearQuiz, fetchQuestions } from '../../store/slices/quizSlice';

export const QuizPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, config } = useSelector((state) => state.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(config.time || 60); // Use the time from the config or default to 60 seconds.

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(timer);
      navigate('/results');
    }

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate('/results');
    }
  };

  const handleEndQuiz = () => {
    navigate('/results');
  };

  return (
    <Box>
      {currentQuestion && (
        <VStack spacing="4">
          <Text>Question {currentQuestionIndex + 1} of {questions.length}</Text>

          <Progress value={(currentQuestionIndex + 1) / questions.length * 100} size="lg" colorScheme="blue" />

          <Text>{currentQuestion.question}</Text>

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
      )}
    </Box>
  );
};

export default QuizPage;

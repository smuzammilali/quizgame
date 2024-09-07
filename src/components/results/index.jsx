import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearQuiz, fetchQuestions } from '../../store/slices/quizSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

export const ResultsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, config } = useSelector((state) => state.quiz);

  const handleRestartQuiz = () => {
    dispatch(fetchQuestions(config)).then(() => {
      navigate('/quiz');
    });
  };

  const handleChooseAnotherQuiz = () => {
    dispatch(clearQuiz());
    navigate('/');
  };

  return (
    <Box>
      <VStack spacing="4">
        <Text>Thank you for completing the quiz!</Text>
        <Text>
          You answered {questions.filter((q) => q.correct_answer).length} out of {questions.length} questions correctly.
        </Text>

        <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
        <Button onClick={handleChooseAnotherQuiz}>Choose Another Quiz</Button>
      </VStack>
    </Box>
  );
}

export default ResultsPage;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearQuiz, fetchQuestions } from '../../store/slices/quizSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

export const ResultsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, config } = useSelector((state) => state.quiz);

  const { results } = useSelector((state) => state.quiz);

  if (!results) {
    return <Text>No results available</Text>;
  }

  const handleRestartQuiz = () => {
    dispatch(fetchQuestions(config)).then(() => {
      navigate('/quiz');
    });
  };

  const handleChooseAnotherQuiz = () => {
    dispatch(clearQuiz());
    navigate('/');
  };

  const { correctAnswers, totalQuestions, timeTaken } = results;

  return (
    <Box>
      <VStack spacing="4">
      <Text>Thank you for completing this quiz. Here are your results:</Text>
      <Text>You answered {correctAnswers} out of {totalQuestions} questions correctly.</Text>
      <Text>You took {timeTaken} seconds to complete the quiz.</Text>

        <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
        <Button onClick={handleChooseAnotherQuiz}>Choose Another Quiz</Button>
      </VStack>
    </Box>
  );
}

export default ResultsPage;

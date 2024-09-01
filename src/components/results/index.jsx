import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const ResultsPage = () => {
  
  const correctAnswers = 5;
  const totalQuestions = 10;
  const timeTaken = '3 minutes 45 seconds';
  const quizConfig = {
    type: 'Multiple Choice',
    category: 'General Knowledge',
    time: '5 minutes',
    difficulty: 'Medium',
  };
  const navigate = useNavigate();

  const handleStartQuiz = () =>{
    
  }

  const handleRestart = () => {
    navigate('/quiz');
  };

  const handleChooseAnotherQuiz = () => {
    navigate('/');
  };

  return (
    <Box maxW="800px" mx="auto" p="20px">
      <VStack spacing="4" align="stretch">
        <Heading as="h1" size="lg" mb="4">
          Thank you for completing this quiz!
        </Heading>

        <Text fontSize="lg" mb="4">
          You answered {correctAnswers} out of {totalQuestions} questions correctly.
        </Text>

        <Box mb="4">
          <Text fontSize="md" fontWeight="bold">Quiz Configuration:</Text>
          <Text fontSize="md">Type: {quizConfig.type}</Text>
          <Text fontSize="md">Category: {quizConfig.category}</Text>
          <Text fontSize="md">Time: {quizConfig.time}</Text>
          <Text fontSize="md">Difficulty: {quizConfig.difficulty}</Text>
        </Box>

        <Text fontSize="md" mb="4">
          Time Taken: {timeTaken}
        </Text>

        <VStack spacing="4" align="stretch">
          <Button colorScheme="blue" onClick={handleRestart}>
            Restart
          </Button>
          <Button colorScheme="teal" onClick={handleChooseAnotherQuiz}>
            Choose Another Quiz
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}

export default ResultsPage;

import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Button,
  Flex,
  Progress,
  VStack,
  Text,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

export const QuizPage = () => {
  const [timer, setTimer] = useState(60); 
  const [questionNumber, setQuestionNumber] = useState(3); 
  const [totalQuestions] = useState(6); 
  const [answers] = useState(['True', 'False']); 
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Box maxW="800px" mx="auto" p="20px">
      <VStack spacing="4" align="stretch">
        <Heading as="h1" size="lg">
          Question {questionNumber} of {totalQuestions}
        </Heading>

        <Text fontSize="lg">What is the capital of France?</Text>

        <Progress
          value={(questionNumber / totalQuestions) * 100}
          size="sm"
          colorScheme="blue"
          mb="4"
        />

        <SimpleGrid columns={2} spacing="4" mb="4">
          {answers.map((answer, index) => (
            <Button key={index} colorScheme="teal">
              {answer}
            </Button>
          ))}
        </SimpleGrid>

        <Button colorScheme="red" onClick={onOpen}>
          End Quiz
        </Button>

        <Text fontSize="lg" mt="4">
          Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
        </Text>
      </VStack>
    </Box>
  );
}

export default QuizPage;

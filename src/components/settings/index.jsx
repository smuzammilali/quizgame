import React from 'react';
import { Box, Heading, FormLabel, Input, Select, Button, Flex } from '@chakra-ui/react';

export const Settings = () => {
  return (
    <Box maxW="400px" mx="auto" p="20px" textAlign="center">
      <Heading as="h1" mb="6">
        Welcome to the Quiz
      </Heading>

      <Box mb="4">
        <FormLabel htmlFor="number-of-questions">Number of Questions</FormLabel>
        <Input
          id="number-of-questions"
          type="number"
          placeholder="Enter a number between 5 and 15"
          min="5"
          max="15"
        />
      </Box>

      <Box mb="4">
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select id="category" name="category">
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="sports">Sports</option>
        </Select>
      </Box>

      <Box mb="4">
        <FormLabel htmlFor="difficulty">Difficulty</FormLabel>
        <Select id="difficulty" name="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </Box>

      <Box mb="4">
        <FormLabel htmlFor="type">Type</FormLabel>
        <Select id="type" name="type">
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </Select>
      </Box>

      <Box mb="4">
        <FormLabel htmlFor="time">Time</FormLabel>
        <Select id="time" name="time">
          <option value="1m">1 minute</option>
          <option value="2m">2 minutes</option>
          <option value="5m">5 minutes</option>
        </Select>
      </Box>

      <Flex justify="space-between" mt="4">
        <Button colorScheme="blue">Start Quiz</Button>
        <Button colorScheme="blue" variant="outline">
          See My Statistics
        </Button>
      </Flex>
    </Box>
  )
}

export default Settings;
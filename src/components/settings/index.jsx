import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, Heading } from '@chakra-ui/react';
import { fetchCategories, setQuizConfig, fetchQuestions } from '../../store/slices/quizSlice';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.quiz.categories);
  
  const [numQuestions, setNumQuestions] = useState(5);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [type, setType] = useState('multiple');
  const [time, setTime] = useState(60); 

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleStartQuiz = () => {
    const config = {
      numQuestions,
      category,
      difficulty,
      type,
      time, 
    };

    dispatch(setQuizConfig(config));
    dispatch(fetchQuestions(config));
    navigate('/quiz');
  };

  return (
    <Box maxW="md" mx="auto" mt="8" p="6" bg="gray.700" borderRadius="md" boxShadow="xl">
      <Heading as="h2" size="lg" mb="6" textAlign="center" color="white">
        Quiz Settings
      </Heading>

      <VStack spacing="4">
        {/* Number of Questions */}
        <FormControl id="numQuestions" isRequired>
          <FormLabel color="white">Number of Questions</FormLabel>
          <Input
            type="number"
            min={5}
            max={15}
            value={numQuestions}
            onChange={(e) => setNumQuestions(e.target.value)}
            bg="gray.600"
            color="white"
          />
        </FormControl>

        {/* Category */}
        <FormControl id="category" isRequired>
          <FormLabel color="white">Category</FormLabel>
          <Select
            placeholder="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            bg="gray.600"
            color="white"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id} style={{ color: 'black' }}>
                {cat.name}
              </option>
            ))}
          </Select>
        </FormControl>

        {/* Difficulty */}
        <FormControl id="difficulty" isRequired>
          <FormLabel color="white">Difficulty</FormLabel>
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            bg="gray.600"
            color="white"
          >
            <option value="easy" style={{ color: 'black' }}>Easy</option>
            <option value="medium" style={{ color: 'black' }}>Medium</option>
            <option value="hard" style={{ color: 'black' }}>Hard</option>
          </Select>
        </FormControl>

        {/* Type */}
        <FormControl id="type" isRequired>
          <FormLabel color="white">Type</FormLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            bg="gray.600"
            color="white"
          >
            <option value="multiple" style={{ color: 'black' }}>Multiple Choice</option>
            <option value="boolean" style={{ color: 'black' }}>True/False</option>
          </Select>
        </FormControl>

        {/* Time */}
        <FormControl id="time" isRequired>
          <FormLabel color="white">Time (minutes)</FormLabel>
          <Select
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
            bg="gray.600"
            color="white"
          >
            <option value={60} style={{ color: 'black' }}>1 Minute</option>
            <option value={120} style={{ color: 'black' }}>2 Minutes</option>
            <option value={300} style={{ color: 'black' }}>5 Minutes</option>
          </Select>
        </FormControl>

        {/* Start Quiz Button */}
        <Button colorScheme="blue" onClick={handleStartQuiz}>
          Start Quiz
        </Button>

        {/* See Statistics Button */}
        <Button colorScheme="teal" onClick={() => navigate('/results')}>
          See My Statistics
        </Button>
      </VStack>
    </Box>
  );
};

export default Settings;

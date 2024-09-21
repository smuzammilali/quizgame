import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk('quiz/fetchCategories', async () => {
    try {
        const response = await axios.get('https://opentdb.com/api_category.php');
        return response.data.trivia_categories;
    } catch (error) {
        console.error('Failed to fetch categories:', error);
    }
});

export const fetchQuestions = createAsyncThunk('quiz/fetchQuestions', async (config) => {
    try {
        const { numQuestions, category, difficulty, type } = config;
        const response = await axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`);
        return response.data.results;
        
    } catch (error) {
        console.error('Failed to fetch questions:', error);
    }
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    categories: [],
    questions: [],
    config: {
        numQuestions: 5,
        category: '',
        difficulty: 'easy',
        type: 'multiple',
        time: 60, 
      }, 
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
      setQuizConfig: (state, action) => {
        state.config = action.payload;
      },
      setQuestions: (state, action) => {
        state.questions = action.payload;
      },
      setResults: (state, action) => {
        state.results = action.payload;
      },
      clearQuiz: (state) => {
        state.questions = [];
        state.config = {
          numQuestions: 5,
          category: '',
          difficulty: 'easy',
          type: 'multiple',
          time: 60, 
        };
        state.results = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { setQuizConfig, setQuestions, setResults, clearQuiz } = quizSlice.actions;

export default quizSlice.reducer;

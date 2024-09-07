import React, { useEffect } from 'react';
import { Settings } from './components/settings'
import { QuizPage } from './components/quiz'
import { ResultsPage } from './components/results'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
      <Router>
      <Routes>
        <Route exact path="/" element={<Settings></Settings>} />
        <Route path="/quiz" element={<QuizPage></QuizPage>} />
        <Route path="/results" element={<ResultsPage></ResultsPage>} />
      </Routes>
    </Router>
  )
}

export default App;
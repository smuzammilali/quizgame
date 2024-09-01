import React from 'react'
import { Settings } from './components/settings'
import { QuizPage } from './components/quiz'
import { ResultsPage } from './components/results'

export const App = () => {

  return (
    <div>
      <Settings/>
      <QuizPage/>
      <ResultsPage/>
    </div>
  )
}

export default App;
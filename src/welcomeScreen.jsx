import React from 'react';

export const WelcomeScreen = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Quiz</h1>

      <div style={styles.inputGroup}>
        <label htmlFor="number-of-questions">Number of Questions</label>
        <input
          type="number"
          id="number-of-questions"
          name="number-of-questions"
          min="5"
          max="15"
          placeholder="Enter a number between 5 and 15"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" style={styles.input}>
          <option value="general">General Knowledge</option>
          <option value="science">Science</option>
          <option value="history">History</option>
          <option value="sports">Sports</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="difficulty">Difficulty</label>
        <select id="difficulty" name="difficulty" style={styles.input}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="type">Type</label>
        <select id="type" name="type" style={styles.input}>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="time">Time</label>
        <select id="time" name="time" style={styles.input}>
          <option value="1m">1 minute</option>
          <option value="2m">2 minutes</option>
          <option value="5m">5 minutes</option>
        </select>
      </div>

      <div style={styles.buttonGroup}>
        <button style={styles.button}>Start Quiz</button>
        <button style={styles.button}>See My Statistics</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

// export default WelcomeScreen;

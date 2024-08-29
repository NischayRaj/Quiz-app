import React from "react";
import '../styles/styles.css'
const StartScreen = ({ onStart }) => {
  return (
    <div className="start-container">
      <h2 className="start">Welcome to the Quiz Game!</h2>
      <button onClick={onStart} className="start-button">Start Quiz</button>
    </div>
  );
};

export default StartScreen;

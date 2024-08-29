import React, { useEffect } from "react";
import '../styles/styles.css'
const EndScreen = ({ score, highScore, onRestart, updateHighScore }) => {
  useEffect(() => {
    updateHighScore();
  }, [score]);

  return (
    <div className="end-container">
      <h2 className="end-title">Game Over!</h2>
      <p className="score">Your final score: {score}</p>
      <p className="high">High score: {highScore}</p>
      <button onClick={onRestart} className="end-button">Restart Game</button>
    </div>
  );
};

export default EndScreen;

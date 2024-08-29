import React, { useState } from "react";
import quizData from "./quizData.json";
import QuizScreen from "./components/QuizScreen";
import StartScreen from "./components/StartScreen";
import EndScreen from "./components/EndScreen";
import './styles/styles.css'

const App = () => {
  const [gameState, setGameState] = useState("start");
  const [currentLevel, setCurrentLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  const handleStartQuiz = () => {
    setGameState("quiz");
  };

  const handleNextLevel = () => {
    if (currentLevel === "easy") setCurrentLevel("medium");
    else if (currentLevel === "medium") setCurrentLevel("hard");
    else setGameState("end");
  };

  const handleRestart = () => {
    setGameState("start");
    setCurrentLevel("easy");
    setScore(0);
  };

  const updateHighScore = () => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("highScore", score);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Multi-Level Quiz Game</h1>
      </header>
      <div className="content">
        {gameState === "start" && <StartScreen onStart={handleStartQuiz} />}
        {gameState === "quiz" && (
          <QuizScreen
            level={currentLevel}
            quizData={quizData[currentLevel]}
            score={score}
            setScore={setScore}
            onNextLevel={handleNextLevel}
          />
        )}
        {gameState === "end" && (
          <EndScreen
            score={score}
            highScore={highScore}
            onRestart={handleRestart}
            updateHighScore={updateHighScore}
          />
        )}
      </div>
    </div>
  );
};

export default App;

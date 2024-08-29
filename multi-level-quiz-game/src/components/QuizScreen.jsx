import React, { useState } from "react";
import Question from "./Question"
import '../styles/styles.css'

const QuizScreen = ({ level, quizData, score, setScore, onNextLevel }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswerSubmit = (isCorrect) => {
    if (isCorrect) {
      setScore(score + (level === "easy" ? 10 : level === "medium" ? 20 : 30));
      setCorrectAnswers(correctAnswers + 1);
      setFeedback("The Answer is Correct!");
    } else {
      setFeedback("The Answer is Incorrect!");
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % quizData.length);
    } else {
      if (correctAnswers + (isCorrect ? 1 : 0) >= 2) {
        onNextLevel();
        setCurrentQuestionIndex(0);
        setCorrectAnswers(0);
      } else {
        alert("You didn't pass the level. Try again!");
        window.location.reload();
      }
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <p className="level">{level.charAt(0).toUpperCase() + level.slice(1)} Level</p>
        <p className="score">Score: {score}</p>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}
      {quizData.length > 0 && (
        <Question
          data={quizData[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
};

export default QuizScreen;

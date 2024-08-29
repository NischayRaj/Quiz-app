import React, { useState } from "react";
import '../styles/styles.css'

const Question = ({ data, onAnswerSubmit }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = userAnswer === data.correctAnswer;
    onAnswerSubmit(isCorrect);
  };

  return (
    <div className="question-container">
      <h3 className="question-text">{data.question}</h3>
      <form onSubmit={handleSubmit}>
        {data.type === "multiple-choice" && (
          <div className="options-container">
            {data.options.map((option, index) => (
              <label key={index} className="option-label">
                <input
                  type="radio"
                  value={option}
                  name="multiple-choice"
                  checked={userAnswer === option}
                  onChange={() => setUserAnswer(option)}
                />
                {option}
              </label>
            ))}
          </div>
        )}
        {data.type === "true-false" && (
          <div className="options-container">
            <label className="option-label">
              <input
                type="radio"
                value="true"
                name="true-false"
                checked={userAnswer === "true"}
                onChange={() => setUserAnswer("true")}
              />
              True
            </label>
            <label className="option-label">
              <input
                type="radio"
                value="false"
                name="true-false"
                checked={userAnswer === "false"}
                onChange={() => setUserAnswer("false")}
              />
              False
            </label>
          </div>
        )}
        {data.type === "text-input" && (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="text-input"
          />
        )}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Question;

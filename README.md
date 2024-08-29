
# Multi-Level Quiz Game

## Overview

This project is a Multi-Level Quiz Game built using React. The game progresses through three levels: easy, medium, and hard. Each level contains a series of questions, including multiple-choice, true/false, and text-input types. Players must answer the questions correctly to advance to the next level.
## Features

- **Three Difficulty Levels**: Easy, Medium, and Hard, each with its own set of questions.
- **Question Types**: Supports multiple-choice, true/false, and text-input questions.
- **Dynamic Scoring**: Scores are calculated based on the difficulty of the question.
- **Progression System**: Players must answer a minimum number of questions correctly to advance to the next level.
- **High Score Tracking**: The highest score is saved locally.
## Project Structure

- **`App.js`**: The main component that manages the game state and flow between screens (Start, Quiz, End).
- **`QuizScreen.js`**: Handles the display and functionality of the quiz questions.
- **`Question.js`**: A component responsible for rendering the individual questions and handling user input.
- **`StartScreen.js`**: The screen displayed at the beginning of the game.
- **`EndScreen.js`**: The screen displayed when the game ends, showing the final score and high score.
- **`quizData.json`**: A JSON file containing the quiz questions and answers.
- **`styles.css`**: Contains the custom styles used throughout the application.
## Installation


   ```bash
   git clone (repo name)
   cd mutli-level-quiz-game
   npm install
   npm run dev
   ```
## Video of the project

https://github.com/user-attachments/assets/5225e490-f00b-4140-9ed1-056a935d89da

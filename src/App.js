import React, { useState } from 'react';
import questionsData from './questionsData';
import Question from './Question';
import Result from './Result';
import './styles.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (selectedOptionIndex) => {
    const updatedQuestionsData = [...questionsData];
    updatedQuestionsData[currentQuestion].options.forEach((option, index) => {
      option.clicked = index === selectedOptionIndex;
    });
    questionsData[currentQuestion].options[selectedOptionIndex].clicked = true;

    if (questionsData[currentQuestion].options[selectedOptionIndex].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className="app">
      {!questionsData[currentQuestion] ? (
        <Result score={score} totalQuestions={questionsData.length} />
      ) : (
        <Question
          questionData={{
            ...questionsData[currentQuestion],
            index: currentQuestion,
            totalQuestions: questionsData.length,
          }}
          handleAnswerOptionClick={handleAnswerOptionClick}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
        
      )}
    </div>
  );
}

export default App;

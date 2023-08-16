import React from 'react';

function Question({ questionData, handleAnswerOptionClick, handleNextClick, handlePrevClick }) {
  const isLastQuestion = questionData.index === questionData.totalQuestions - 1;

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <ul>
        {questionData.options.map((option, index) => (
          <li
            key={index}
            className={option.clicked ? (option.isCorrect ? 'correct' : 'incorrect') : ''}
            onClick={() => handleAnswerOptionClick(index)}
          >
            {option.text}
          </li>
        ))}
      </ul>
      <button onClick={handlePrevClick} disabled={questionData.index === 0}>
        Previous
      </button>
      {isLastQuestion ? (
        <button onClick={handleNextClick}>Submit</button>
      ) : (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
}

export default Question;

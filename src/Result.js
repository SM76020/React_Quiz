import React from 'react';

function Result({ score, totalQuestions, restartQuiz }) {
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="result">
      <h2>Quiz Result</h2>
      <p>Your score: {score}</p>
      <p>Percentage: {percentage}%</p>
      {/* <button onClick={restartQuiz}>Restart Quiz</button> */}
    </div>
  );
}

export default Result;

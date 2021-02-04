import React from "react";
import "./button.css";

const Button = ({ newQuiz, result, setFinalResult }) => {
  return (
    <div className="quiz__next_wrapper">
      {result ? (
        <button type="button" className="Quiz__nextBtn" onClick={() => setFinalResult()}>
          show result
        </button>
      ) : (
        <button type="button" className="Quiz__nextBtn" onClick={newQuiz}>
          Next Quiz
        </button>
      )}
    </div>
  );
};

export default Button;

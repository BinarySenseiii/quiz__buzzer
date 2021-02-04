import React, { useState } from "react";
import QuizCard from "./components/quiz-card/QuizCard";
import { useFetch } from "./hooks/useFetch";
import { Loader } from "./components/loader/Loader";
import icon from "./components/quiz-card/svg-icon/undraw_adventure_4hum 1.svg";
import Result from "./components/result/Result";

const App = () => {
  const API_URL = "https://opentdb.com/api.php?amount=50&type=multiple";
  const { loading, data } = useFetch(API_URL);

  const [score, setScore] = useState(0);
  const [finalResult, setFinalResult] = useState(true);
  const [newGame, setNewGame] = useState(false);

  const reset = () => {
    setNewGame(true);
    
    setTimeout(() => {
      setScore(0);
      setFinalResult(true);
    }, 1000);

  }
 
  return (
    <div className="quiz__app">
      {finalResult ? (
        <>
          <h1 className="quiz__title">Quiz Buzzer</h1>
          <div className="quiz__card">
            <div className="quiz__card-image">
              <img src={icon} alt="svg-icon not found" />
            </div>
            {loading ? (
              <Loader />
            ) : (
              <QuizCard
                quizData={data}
                setScore={setScore}
                setFinalResult={setFinalResult}
                setNewGame={setNewGame}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <h1 className="quiz__title">Quiz Buzzer</h1>
          <div className="quiz__card">
            <Result score={score} setFinalResult={reset} newGame={newGame} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

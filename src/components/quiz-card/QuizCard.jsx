import React, { useState, memo, useEffect, useCallback, useRef } from "react";

import Button from "../button/Button";
import Question from "./question/Question";
import { shuffle } from "lodash";
import Options from "./options/Options";
import { Loader } from "../loader/Loader";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./quiz_card.css";

const QuizCard = ({ quizData, setScore, setFinalResult, setNewGame }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [active, setActive] = useState(false);
  const [quizQuestion, setQuizQuestion] = useState({});
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [wrongAnswers, setWrongAnswer] = useState([]);
  const [multipleQuestions, setMultipleQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [unCorrectIndex, SetUnCorrectIndex] = useState(null);
  const [result, setResult] = useState(false);

  const { question, correct_answer, incorrect_answers } = quizQuestion;

  // sound Notifications
  const gameOverSound = useRef();
  const correctAnswerSound = useRef();

  useEffect(() => {
    setQuizQuestion(quizData[currentIndex]);
    setCorrectAnswer(correct_answer);
    setWrongAnswer(incorrect_answers);
    setMultipleQuestions(
      shuffle(Object.values({ ...wrongAnswers, correctAnswer }))
    );
  }, [
    correctAnswer,
    correct_answer,
    currentIndex,
    incorrect_answers,
    quizData,
    wrongAnswers,
  ]);

  // Notifications
  const correctNotify = () => toast.success("🚀 hurrah :-) Correct Answer!");
  const wrongNotify = () => toast.error("😥 oops! you Provide wrong answer");

  const selectedCorrectOption = (idx) => {
    const correctIndex = multipleQuestions.findIndex(
      (q) => q === correctAnswer
    );

    // Correct Answer
    if (multipleQuestions[idx] === correctAnswer) {
      setCorrectIndex(correctIndex);
      setScore((prevScore) => prevScore + 1);
      setResult(false);
      correctNotify();
      correctAnswerSound.current.play();
    }

    // incorrect_answers
    if (multipleQuestions[idx] !== correctAnswer) {
      setNewGame(false)
      SetUnCorrectIndex(idx);
      setCorrectIndex(correctIndex);
      setResult(true);
      wrongNotify();
      gameOverSound.current.play();
    }

    setActive(true);
  };

  const nextButtonHandler = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setActive(false);
    setLoading(true);
    setCorrectIndex(null);
    SetUnCorrectIndex(null);

    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <React.Fragment>
        <Question question={question} />
        <Options
          multipleQuestions={multipleQuestions}
          selectedListIndex={selectedCorrectOption}
          active={active}
          correctIndex={correctIndex}
          unCorrectIndex={unCorrectIndex}
        />

        {active && <Button newQuiz={nextButtonHandler} result={result} setFinalResult={setFinalResult} />}
        <audio
          ref={gameOverSound}
          src={window.location.origin + "/assets/sound/gameOver.mp3"}
        ></audio>
        <audio
          ref={correctAnswerSound}
          src={window.location.origin + "/assets/sound/mixkit-positive-notification-951.mp3"}

        ></audio>
        <ToastContainer />
      </React.Fragment>
    );
  }
};

export default memo(QuizCard);

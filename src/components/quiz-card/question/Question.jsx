import React from "react";
import { decode } from "html-entities";
import './question.css'

const Question = ({ question }) => {
  return <h2 className="quiz__question"> {decode(question)} </h2>;
};

export default Question;

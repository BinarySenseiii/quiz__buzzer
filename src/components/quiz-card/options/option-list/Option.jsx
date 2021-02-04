import React from "react";
import { decode } from "html-entities";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export const Option = ({
  multipleQuestions,
  selectedListIndex,
  active,
  correctIndex,
  unCorrectIndex
}) => {
  const aplha = ["A", "B", "C", "D"];
  return (
    <>
      {multipleQuestions.map((multipleQuestion, index) => (
        <li
          key={index}
          className={`${active ? "disabledOption" : ""} ${correctIndex === index && 'right__option'}
          ${unCorrectIndex === index && 'wrong__option'}
          `}
          onClick={() => selectedListIndex(index)}
        >
          <p>
            <strong> {aplha[index]} </strong>
            <span> {decode(multipleQuestion)} </span>
          </p>
          { correctIndex === index && (
            <i className="quiz__icon">
                <FaCheck />
            </i>
          ) }
          { unCorrectIndex === index && (
            <i className="quiz__icon">
                <FaTimes />
            </i>
          ) }
        </li>
      ))}
    </>
  );
};

export default Option;

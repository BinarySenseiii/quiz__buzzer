import React from "react";
import Option from "./option-list/Option";
import "./option.css";

const Options = (props) => {
  return (
    <ol className="quiz__options">
      <Option {...props} />
    </ol>
  );
};

export default Options;

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showInfoBtn = () => {
    setShowInfo((showInfo) => {
      return !showInfo;
    });
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showInfoBtn}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {
        // if showInfo is true, show the info
        // if showInfo is false, don't show the info
        showInfo ? <p>{info}</p> : ""
      }
    </article>
  );
};

export default Question;

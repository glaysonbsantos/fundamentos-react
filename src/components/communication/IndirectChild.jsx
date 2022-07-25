import "./IndirectChild.css";
import React from "react";

export default (props) => {
  const callback = props.whenClicked;
  const randomAge = () => parseInt(Math.random() * 30) + 50;
  const randomNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        id="info"
        onClick={(_) => callback("Liu", randomAge(), randomNerd())}
      >
        Fornecer Informações
      </button>
    </div>
  );
};

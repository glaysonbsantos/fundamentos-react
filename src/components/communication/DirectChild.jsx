import React from "react";

export default (props) => {
  return (
    <div>
      <span>{props.name}, </span>
      <span>
        <strong>{props.age}</strong> anos,{" "}
      </span>
      <span>é nerd? {props.nerd ? "É sim!" : "Não é não!"}</span>
    </div>
  );
};

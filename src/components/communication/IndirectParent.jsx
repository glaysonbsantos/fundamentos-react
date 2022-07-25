import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [isNerd, setNerd] = useState(false);

  function setInfo(name, age, isNerd) {
    setName(name);
    setAge(age);
    setNerd(isNerd);
  }

  return (
    <div>
      <div>
        <span>Nome do parente: {name}, </span>
        <span>{age} anos e </span>
        <span>é nerd? {isNerd ? "Sim!" : "Não!"}</span>
      </div>
      <IndirectChild whenClicked={setInfo}></IndirectChild>
    </div>
  );
};

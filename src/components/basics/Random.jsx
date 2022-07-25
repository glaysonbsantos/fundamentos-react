import React from "react";

export default (props) => {
  const { min, max } = props;
  const randomNum = parseInt(Math.random() * (max - min) + min);

  return (
    <div>
      <h3>Gerador de número aleatório</h3>
      <p>Valor mínimo: {min}</p>
      <p>Valor máximo: {max}</p>
      <p>Número gerado: {randomNum}</p>
    </div>
  );
};

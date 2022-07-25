import "./Mega.css";
import React, { useState } from "react";

export default (props) => {
  function generateNum(quantity) {
    let array = [];
    let i = 1;
    while (i <= quantity) {
      let randomNum = parseInt(Math.random() * 60);
      if (randomNum in array) {
        continue;
      } else {
        array.push(randomNum);
        i++;
      }
    }
    array = array.sort((a, b) => a - b);
    return array;
  }

  const [quantity, setQuantity] = useState(props.quantity || 6);
  const initialNums = generateNum(quantity);
  const [nums, setNums] = useState(initialNums);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <div>
        <h3>{nums.join(" - ")}</h3>
      </div>
      <label>Números a gerar:</label>
      <input
        type="number"
        name="numberInput"
        id="numberInput"
        onChange={(e) => setQuantity(+e.target.value)}
        value={quantity}
        min={1}
        max={60}
      />
      <div>
        <button onClick={(_) => setNums(generateNum(quantity))}>
          Gerar Números
        </button>
      </div>
    </div>
  );
};

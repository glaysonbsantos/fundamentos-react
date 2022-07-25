import React, { useState } from "react";

export default (props) => {
  const [myValue, setValue] = useState("Digite para duplicar!");

  function whenChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <h2>{myValue}</h2>
      <input value={myValue} onChange={whenChange} />
    </div>
  );
};

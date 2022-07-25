import React from "react";

export default (props) => {
  const isPar = props.num % 2 === 0;
  return (
    <div>
      {isPar ? (
        <span>O número da propriedade é Par.</span>
      ) : (
        <span>O número da propriedade é Ímpar.</span>
      )}
    </div>
  );
};

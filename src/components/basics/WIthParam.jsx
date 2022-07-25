import React from "react";

export default function WithParam(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>
        <strong>{props.aluno}</strong> tem nota <strong>{props.nota}</strong> e
        está <strong>{status}</strong>!
      </p>
    </div>
  );
}

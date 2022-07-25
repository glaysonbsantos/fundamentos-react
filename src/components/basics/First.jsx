import React from "react";

export default function First() {
  const msg = "Seja bem-vindo(a)!";
  return (
    <div>
      <h3>Componente JSX</h3>
      <p> {msg} </p>
    </div>
  );
}

/*
  Só é preciso importar o React (como na linha 1) se for utilizar JSX. No caso abaixo não seria necessário:

  export default function First() {
    return "Primeiro componente.";
  }
*/

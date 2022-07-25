import React from "react";
import DirectChild from "./DirectChild";

export default (props) => {
  return (
    <div>
      <DirectChild name="Bê Santos" age={29} nerd={true}></DirectChild>
      <DirectChild name="Jess Alves" age={26} nerd={false}></DirectChild>
    </div>
  );
};

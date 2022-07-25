import "./Card.css";
import React from "react";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#333232",
    borderColor: props.color || "#333232",
  };
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};

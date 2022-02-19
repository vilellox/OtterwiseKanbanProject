import React from "react";
import "./Info.css";

const Task = ({ name, img, label }) => {
  return (
    <div className="Task">
      <h3>{name}</h3>
      <div className="info">
        <img src={img}></img>
        <button>{label}</button>
      </div>
    </div>
  );
};

export default Task;

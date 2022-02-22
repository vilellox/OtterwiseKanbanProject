import React from "react";
import "./Info.css";

const Task = ({ name, img, label, variant, color}) => {
  return (
    <div className={`Task ${variant}`}>
      <h3>{name}</h3>
      <div className="info">
        <img src={img}></img>
        <button className={color}>{label}</button>
      </div>
    </div>
  );
};

export default Task;

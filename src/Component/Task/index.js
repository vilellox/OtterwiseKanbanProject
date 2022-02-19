import React from "react";
import "./Info.css";

const Task = ({ name, img, label }) => {
  return (
    <>
      <h3>{name}</h3>
      <div>
        <img src={img}></img>
        <button>{label}</button>
      </div>
    </>
  );
};

export default Task;

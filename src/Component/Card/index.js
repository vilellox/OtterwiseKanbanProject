import react from "react";
import Task from "../Task";
import img from "../../assets/img/Female.png";

import "./Card.css";

const Card = ({ icon, title, tasks }) => {
  return (
    <div className="">
      <img src={icon}></img>
      <h3>{title}</h3>
      {tasks.map((task) => {
        console.log(task);
        return <Task name={task.name} label={task.label} img={task.img} />;
      })}
    </div>
  );
};

export default Card;

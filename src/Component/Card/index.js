import react from "react";
import Task from "../Task";
import img from "../../assets/img/Female.png";

import "./Card.css";

const Card = ({ icon, title, tasks }) => {
  return (
    <div className="Card">
      <div className="card__title">
        <img src={icon}></img>
        <h3 className="title">{title}</h3>
      </div>
      {tasks.map((task) => {
        console.log(task);
        return <Task name={task.name} label={task.label} img={task.img} />;
      })}
    </div>
  );
};

export default Card;

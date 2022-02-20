import Task from "../Task";

import "./Card.css";

const Card = ({ icon, title, tasks, variant }) => {
  return (
    <div className={`Card ${variant}`}>
      <div className="card__title">
        <img src={icon}></img>
        <h3 className="title">{title}</h3>
      </div>
      {tasks.map((task) => {
        console.log(task);
        return (
          <Task
            variant={variant}
            name={task.name}
            label={task.label}
            img={task.img}
          />
        );
      })}
    </div>
  );
};

export default Card;

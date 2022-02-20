import React from "react";
import Card from "./Component/Card";
import icon from "./assets/img/todo.svg";
import icon1 from "./assets/img/icon01.svg";
import img from "./assets/img/Female.png";
import img01 from "./assets/img/Female01.png";
import background from "./assets/img/background.svg";

import "./App.css";

function App() {
  const tasks00 = [
    { name: "Christmas Banners", img: img, label: "Label" },
    { name: "Redo Portfolio", img: img, label: "Label" },
  ];
  const tasks01 = [
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Updating Portfolio", img: img01, label: "Always" },
  ];
  const tasks02 = [
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Updating Portfolio", img: img01, label: "Always" },
  ];
  const tasks03 = [
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Updating Portfolio", img: img01, label: "Always" },
  ];
  return (
    <div className="App">
      <h1>Kanban</h1>
      <div className="App__tasks">
        <div>
          <Card variant="todo" title={"To do"} icon={icon} tasks={tasks00} />
        </div>
        <div>
          <Card
            variant="progress"
            title={"In Progress"}
            icon={icon1}
            tasks={tasks01}
          />
        </div>
        <div>
          <Card
            variant="review"
            title={"In Progress"}
            icon={icon1}
            tasks={tasks02}
          />
        </div>
        <div>
          <Card
            variant="done"
            title={"In Progress"}
            icon={icon1}
            tasks={tasks03}
          />
        </div>
      </div>
      {/* <img src={background} /> */}
    </div>
  );
}

export default App;

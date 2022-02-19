import React from "react";
import Card from "./Component/Card";
import icon from "./assets/img/todo.svg";
import icon1 from "./assets/img/icon01.svg";
import img from "./assets/img/Female.png";
import img01 from "./assets/img/Female01.png";

import "./App.css";

function App() {
  const tasks = [
    { name: "Christmas Banners", img: img, label: "Label" },
    { name: "Redo Portfolio", img: img, label: "Label" },
  ];
  const tasks1 = [
    { name: "Coffee Break", img: img01, label: "Always" },
    { name: "Updating Portfolio", img: img01, label: "Always" },
  ];
  return (
    <div className="App">
      <h1>Kanban</h1>
      <div className="App__tasks">
        <div>
          <Card title={"To do"} icon={icon} tasks={tasks} />
        </div>
        <div>
          <Card title={"In Progress"} icon={icon1} tasks={tasks1} />
        </div>
      </div>
    </div>
  );
}

export default App;

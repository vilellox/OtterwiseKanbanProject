import React from "react";
import Card from "./Component/Card";
import icon from "./assets/img/todo.svg";
import img from "./assets/img/Female.png";

import "./App.css";

function App() {
  const tasks = [
    { name: "Christmas Banners", img: img, label: "Label" },
    { name: "Redo Portfolio", img: img, label: "Label" },
  ];
  return (
    <div className="App">
      <h1>Kanban</h1>
      <Card title={"To do"} icon={icon} tasks={tasks} />
    </div>
  );
}

export default App;

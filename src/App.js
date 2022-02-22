import React from "react";
import Card from "./Component/Card";
import icon from "./assets/img/todo.svg";
import icon1 from "./assets/img/icon01.svg";
import icon2 from "./assets/img/pen.svg"
import icon3 from "./assets/img/Done.png"
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
    { name: "Updating Portfolio", img: img01, label: "Webflow" },
  ];
  const tasks02 = [
    { name: "Release ta Figma Community", img: img01, label: "Release" },
    { name: "User Feedback", img: img01, label: "Feedback" },
    { name: "Background images from humaaans.com", img: img01, label: "Sourcing" },
  ];
  const tasks03 = [
    { name: "Style Guide", img: img01, label: "UI" },
    { name: "Component Library", img: img01, label: "UI" },
    { name: "Stickers Components", img: img01, label: "UI" },
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
            title={"Review"}
            icon={icon2}
            tasks={tasks02}
            color="purple"
          />
        </div>
        <div>
          <Card
            variant="done"
            title={"Done"}
            icon={icon3}
            tasks={tasks03}
            color="Green"
          />
        </div>
      </div>
      {/* <img src={background} /> */}
    </div>
  );
}

export default App;

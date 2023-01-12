import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Menu from "./ui/Menu";
import "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";

const testMenu = parseData(data.split("\n"));

const test = [
  {
    title: "Main",
    items: [
      {
        title: "Sub",
        items: [{ title: "Subsub" }],
      },
      {
        title: "Sub2NoChildren",
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0);
  console.log(testMenu);

  return (
    <div className="App">
      {/* <Menu items={test}></Menu> */}

      {testMenu.toString()}
    </div>
  );
}

export default App;

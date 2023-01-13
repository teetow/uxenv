import "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";
import Menu from "./ui/Menu";
import MenuBar from "./ui/MenuBar";

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
  return (
    <div className="App">
      <MenuBar items={testMenu} />
    </div>
  );
}

export default App;

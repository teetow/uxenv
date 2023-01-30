import { CSSProperties } from "react";
import "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";
import { XTest } from "./ui/Menu";
import MenuBar from "./ui/MenuBar";

const menuData = parseData(data.split("\n"));

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
} as CSSProperties;

function App() {
  return (
    <div className="App">
      <style>{`
      .cell {
        align-self: stretch;
        justify-self: stretch;
        min-height: 64px;
        min-width: 10px;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
      }
      .hilight { border-color: #ff06; }
      `}</style>

      <MenuBar items={menuData} />
      {/* <XTest/> */}

      {/* <pre>{JSON.stringify(menuData, null, 2)}</pre> */}
    </div>
  );
}

export default App;

import "./App.css";
import data from "./data/menu.txt?raw";
import { parseData } from "./lib/parseMenu";
import MenuBar from "./ui/MenuBar";

const menuData = parseData(data.split("\n"));

function App() {
  return (
    <div className="App">
      <MenuBar items={menuData} />

      <pre>{JSON.stringify(menuData, null, 2)}</pre>
    </div>
  );
}

export default App;

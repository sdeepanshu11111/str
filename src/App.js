// import components
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import { useState } from "react";

// toggle

function App() {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState([]);

  return (
    <div className="App">
      <nav>
        <p>Nav Bar</p>
      </nav>
      <div className="gridContainer">
        <SideBar setToggle={setToggle} toggle={toggle} />
        <MainContent setInput={setInput} input={input} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;

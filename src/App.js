import "./App.css";
import Topbar from "./components/Topbar/Index";
import SideDrawar from "./components/SideDrawar/index";
import Backdrop from "./components/Backdrop/index";
import Home from "./Pages/Home/Index";
import { useState } from "react";

function App() {
  const [toglle, settoglle] = useState(false);
  return (
    <div className="App">
      <Topbar click={() => settoglle(true)} />
      <SideDrawar show={toglle} click={() => settoglle(false)} />
      <Backdrop show={toglle} click={() => settoglle(false)} />
      <Home />
    </div>
  );
}

export default App;

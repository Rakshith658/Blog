import "./App.css";
import Topbar from "./components/Topbar/Index";
import SideDrawar from "./components/SideDrawar/index";
import Backdrop from "./components/Backdrop/index";
import Home from "./Pages/Home/Index";
import Single from "./Pages/Single/Index";
import Write from "./Pages/Write/Index";
import Setting from "./Pages/setting/Index";
import Rigester from "./Pages/auth/rigester/Index";
import Login from "./Pages/auth/login/Index";

import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Logincontext } from "./context/context";

function App() {
  const [toglle, settoglle] = useState(false);
  const { user } = useContext(Logincontext);

  return (
    <Router>
      <div className="App">
        <Topbar click={() => settoglle(!toglle)} user={user} />
        <SideDrawar show={toglle} click={() => settoglle(false)} user={user} />
        <Backdrop show={toglle} click={() => settoglle(false)} />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register">{user ? <Home /> : <Rigester />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Rigester />}</Route>
        <Route path="/single/:postId" component={Single} />
        <Route path="/setting">{user ? <Setting /> : <Rigester />}</Route>
        <Route path="/*" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

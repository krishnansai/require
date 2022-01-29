import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar.js";
import "./Admin.css";
import History from "./History.js";
import Oncampus from "./Oncampus.js";
import Offcampus from "./Offcampus.js";
function Menu({ sideData }) {
  return (
    <div className="menu">
      <div className="head">
        <h1>Welcome Admin{sideData}</h1>
      </div>
      <Router>
        <div className="menu-div">
        <div>
      <Sidebar />
</div>
<div>
        <Switch>
          <Route path="/history">
            <History sideData={"callData"} />
          </Route>
          <Route path="/oncampus">
            <Oncampus />
          </Route>
          <Route path="/offcampus">
            <Offcampus />
          </Route>
          <Route>
            <Route path="\Details"></Route>
          </Route>
        </Switch>
        </div>

        </div>
      </Router>
    </div>
  );
}

export default Menu;

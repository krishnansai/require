import React from "react";
import "../../App.css";
import SideData from "./SideData.js";
import "./Admin.css";
import History from "./History";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddLinkIcon from "@mui/icons-material/AddLink";

function Sidebar() {
  return (
    <div className="side">
      <Router>
        <div className="side-list">
          <ul>
            {/* {SideData.map((val, key)=>{
          return <li key={key} 
          className="row"
          onClick={()=>{window.location.pathname = val.link}}>
              <div>{val.icon}</div>{" "}
              <div>{val.title}</div>   
          </li>
            // {{val.link == "/history" ? <History /> : null}}
      })} */}
            <div className="colum">
              <div className="sid-row">
              <HomeIcon />
                <Link to="/history">
                  <div>onCampus</div>
                </Link>
              </div>
              <div className="sid-row">
              <AddLinkIcon />
                <Link to="/history">
                  <div>OffCampus</div>
                </Link>
              </div>
              <div className="sid-row">
              <ManageAccountsIcon />
                <Link to="/history">
                  <div>details</div>
                </Link>
              </div>
              <div className="sid-row">
              <CheckBoxIcon />
                <Link to="/history">
                  <div>Eligibility</div>
                </Link>
              </div>
              <div className="sid-row">
              <HistoryIcon />
                <Link to="/history">
                  <div>History</div>
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <Switch>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Sidebar;

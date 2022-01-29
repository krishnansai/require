import React from "react";
import "../../App.css";
import "./Admin.css";
import { Button } from "@mui/material";

import History from "./History";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddLinkIcon from "@mui/icons-material/AddLink";
import Oncampus from "./Oncampus";

function Sidebar(props) {
  // const sideclick = (e) => {
  //   console.log(e.value);
  // };
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
                <Link to="/oncampus">
                  <Button variant="contained" color="success">
                    onCampus
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <AddLinkIcon />
                <Link to="/history">
                  <Button variant="contained" color="success">
                    offCampus
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <ManageAccountsIcon />
                <Link to="/history">
                  <Button variant="contained" color="success">
                    Detils
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <CheckBoxIcon />
                <Link to="/history">
                  <Button variant="contained" color="success">
                    Eligible
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <HistoryIcon />
                <Link to="/history">
                  <Button variant="contained"  color="success">
                    History
                  </Button>
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <Switch>
          <Route path="/history">
            <History name="callHistory"/>
          </Route>
          <Route path="/oncampus">
            <Oncampus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Sidebar;

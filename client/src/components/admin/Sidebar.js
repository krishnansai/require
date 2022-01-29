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
import Offcampus from "./Offcampus";

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
<<<<<<< HEAD
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
=======
              <AddLinkIcon />
                <Link to="/offcampus">
                <Button variant="contained" color="success">offCampus</Button> 
                 </Link>
              </div>
              <div className="sid-row">
              <ManageAccountsIcon />
                <Link to="/details">
                <Button variant="contained" color="success">Detils</Button>
                   </Link>
>>>>>>> 7142b7cc11b27883c6dace0e1627ac92aeb26ef8
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
          <Route path="/offcampus">
            <Offcampus />
            </Route>
  <Route>
    <Route path="\Details"></Route>
  </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Sidebar;

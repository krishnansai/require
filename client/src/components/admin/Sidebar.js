import React from "react";
import "../../App.css";
import "./Admin.css";
import { Button } from "@mui/material";

import { BrowserRouter as Router, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddLinkIcon from "@mui/icons-material/AddLink";


function Sidebar(props) {

  return (
    <div className="side">
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
              {/* <div className="sid-row">
                <AddLinkIcon />
                <Link to="/offcampus">
                  <Button variant="contained" color="success">
                    offCampus
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <ManageAccountsIcon />
                <Link to="/details">
                  <Button variant="contained" color="success">
                    Details
                  </Button>
                </Link>
              </div>
              <div className="sid-row">
                <CheckBoxIcon />
                <Link to="/eligible">
                  <Button variant="contained" color="success">
                    Eligible
                  </Button>
                </Link>
              </div> */}
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
        {/* <Switch>
          <Route path="/history">
             <History sideData ={"callData"} />
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
        </Switch> */}
    </div>
  );
}

export default Sidebar;

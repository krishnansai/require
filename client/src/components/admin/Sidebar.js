import React from 'react';
import "../../App.css";
import SideData from "./SideData.js";
import "./Admin.css";
function Sidebar() {
  return (
  <div className="side">
    <div className="side-list">
      <ul>
      {SideData.map((val, key)=>{
          return <li key={key} 
          className="row"
          onClick={()=>{window.location.pathname = val.link}}>
              <div>{val.icon}</div>{" "}
              <div>{val.title}</div>   
          </li>
      })}
      </ul>
      </div>
  </div>
    );
}

export default Sidebar;

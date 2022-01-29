
import React from 'react';
import Sidebar from './Sidebar';
import "./Admin.css";
function Menu(props) {
  
  return <div className="menu">
      <div className="head">
          <h1>Welcome Admin</h1>
          {<h1>Welcome {props.name}</h1> }
      </div>
      <Sidebar/>
  </div>;
}

export default Menu;

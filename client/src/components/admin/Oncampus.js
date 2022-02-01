import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Admin.css";
import { Button } from "@mui/material";

function Oncampus() {
  return (
    <div>
      <h1>Oncampus</h1>
      <div>
        <Link to="/formon">
          <Button variant="contained" color="success">
            New
          </Button>
        </Link>
      </div>
      <div className="multi-card">
        <Link to="/edit">
          <Button>
        <div class="card">
          <h2>Soliton Technologies</h2>
          <div class="container">
            <h4>
              <b>28-02-2022</b>
            </h4>
            <p>Back-end devloper</p>
          </div>
          <h5>6Lp</h5>
        </div>
        </Button>
        </Link>
        <Link to="/edit">
          <Button>
        <div class="card">
          <h2>Software Ag</h2>
          <div class="container">
            <h4>
              <b>Nil</b>
            </h4>
            <p>Devops</p>
          </div>
          <h5>10Lp</h5>
        </div>
        </Button>
        </Link>
      </div>
     
      {/* <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Zoho</td>
          <td>Maria Anders</td>
          <td>chennai</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table> */}
    </div>
  );
}

export default Oncampus;

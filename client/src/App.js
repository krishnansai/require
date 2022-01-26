import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import UserMain from "./components/user/UserMain";
import { Button } from "@mui/material";
import Sidebar from "./components/admin/Sidebar";
import TextField from "@mui/material/TextField";

function App() {
  const [login, setLogin] = React.useState(false);
  return (
    <div className="index">
      <Router>
        <div className="btn-group">
          {login === false ? (
            <div onClick={() => setLogin(true)}>
              <div className="btn-login">
                <TextField id="filled-basic" label="Gmail" variant="filled" />
                <br />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
              </div>
              <Link to="/admin">
                <Button variant="contained">Admin Login</Button>
              </Link>
              <br />
              <br />
              <Link to="/user">
                <Button variant="contained">User Login</Button>
              </Link>
            </div>
          ) : (
            <Link to="/" onClick={() => setLogin(false)}>
              <Button variant="outlined" color="error" className="logout">LogOut</Button>
            </Link>
          )}
        </div>

        <div className="App">
          <Switch>
            <Route path="/admin">
              <Sidebar />
            </Route>

            <Route path="/user">
              <UserMain />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

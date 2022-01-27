import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import UserMain from "./components/user/UserMain";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Menu from "./components/admin/Menu.js";
import LogoutIcon from '@mui/icons-material/Logout';
function App() {
  const [login, setLogin] = React.useState(false);
  return (
    <div className="index">
      <Router>
      {login === false ? <div className="btn-login">
                <TextField id="filled-basic" label="Gmail" variant="filled" />
                <br />
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                />
              </div>:null}
        <div className="btn-group">
          {login === false ? (
            <div onClick={() => setLogin(true)}>
              
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
            <Link to="/" style={{textAlign:"end"}} onClick={() => setLogin(false)}>
              <LogoutIcon />
            </Link>
          )}
        </div>

        <div className="App">
          <Switch>
            <Route path="/admin">
              <>
              <Menu />
              </>
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

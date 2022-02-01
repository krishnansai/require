import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserMain from "./components/user/UserMain";
import Menu from "./components/admin/Menu.js";
import "./components/main.css"

const App = () => {
    const [login, setLogin] = React.useState(false);

    return (
        <>
    <div className="App">
     <Router>
     {login === false ? <div className="app">
       <form className="form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <Link to="/admin" onClick={()=> setLogin(true)}>
          <button className="primary">Admin Login</button>
          </Link>
        </form>
        <Link to="/user" onClick={()=> setLogin(true)}>
        <button className="secondary">User Login</button>
        </Link>
        </div>:(
            <Link
              to="/"
              onClick={() => setLogin(false)}
            >
              Logout
            </Link>
          )}
       
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
          </Router>
          </div>
      </>
    );
  
}

export default App;

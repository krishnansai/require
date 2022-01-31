import Userside from "./Userside";
import "./User.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Campus from "./Campus";

function UserMain() {
  return (
    <div>
      <div className="userside">
        <h1>UserMain</h1>
      </div>
      <Router>
        <div className="user">
      <Userside />
      <div>
 
          <Switch>
            <Route path="/campus">
              <Campus />
            </Route>
          </Switch>
      
      </div>
      </div>
      </Router>

    </div>
  );
}
export default UserMain;

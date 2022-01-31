import Userside from "./Userside";
import "./User.css";
import Campus from "./Campus";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function UserMain({ sideData }) {
    return(<div>
            <div className="userside">
            <h1>UserMain{sideData}</h1>
            </div>
            <div>
                <Router>
            <Switch>
          <Route path="/campus">
            <Campus sideData={"callData"} />
          </Route>
          </Switch>
          </Router>
            </div>
            <Userside/>
        </div>
    );
    
}
export default UserMain;
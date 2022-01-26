import AdminMain from "./components/admin/AdminMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserMain from "./components/user/UserMain";
import { Button } from "@mui/material";
function App() {
  return (
    <div className="index">
    <Router>
      <div className="btn-group">
      <Link to="/admin"><Button variant="contained">AdminLogin</Button></Link>
      <Link to="/user"><Button>UserLogin</Button></Link>
      </div>

    <div className="App">
      <Switch>
        <Route path="/admin">
          <AdminMain />
        </Route>
        
        <Route path="/user">
          <UserMain/>
        </Route>
        </Switch>
    </div>
    </Router>
    
    </div>
  );
}

export default App;

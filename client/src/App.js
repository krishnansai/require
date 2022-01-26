import AdminMain from "./components/admin/AdminMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserMain from "./components/user/UserMain";
function App() {
  return (
    <div className="index">
    <Router>
      <Link to="/admin">Admin_Login</Link>
      <Link to="/user">user_Login</Link>

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

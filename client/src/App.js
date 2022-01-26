import AdminMain from "./components/admin/AdminMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Link to="/admin">Login</Link>
    <div className="App">
      <Switch>
        <Route path="/admin">
          <AdminMain />
        </Route>
        </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

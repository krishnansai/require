import { Button } from "@mui/material";
import "./User.css";
import "../../App.css";
import HomeIcon from "@mui/icons-material/Home";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Userside=()=>{
    return(
        <div className="side">
            <ul>
            <div className="sid-row">
            <HomeIcon />
         <Link to="/campus">
         <Button variant="contained" color="success">
              onCampus
            </Button>
            </Link>
        </div>
          </ul>
        </div>
    );

}
export default Userside;
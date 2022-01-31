import { Button } from "@mui/material";
import "./User.css";
import "../../App.css";
import HomeIcon from "@mui/icons-material/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Userside=()=>{
    return(
        <div className="side">
            <ul>
            <div className="sid-row">
            <HomeIcon />
            <Button variant="contained" color="success">
              onCampus
            </Button>
         
        </div>
            <div className="buttons">
            <button>gyfgy</button>
            </div>
            </ul>
        </div>
    )

}
export default Userside;
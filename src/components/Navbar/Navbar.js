import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props){
  return (
    <div className="navbar">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/userlist">
        User List
      </NavLink>
      <NavLink activeClassName="active" to="/addresslist">
        Address List
      </NavLink>
      <NavLink activeClassName="active" to="/not">
        not found
      </NavLink>
    </div>
  );
}
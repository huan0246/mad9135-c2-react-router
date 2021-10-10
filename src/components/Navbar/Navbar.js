import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar(props){

  function removeSelected(ev){
    let cards = document.querySelector('.cards');
    console.log(cards)
    if(cards !== null){
      cards.classList.remove('selected');
    }
  }

  return (
    <div className="navbar">
      <NavLink activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/userlist" onClick={removeSelected}>
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
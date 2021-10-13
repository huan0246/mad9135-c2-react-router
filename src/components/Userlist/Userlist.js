import { useEffect } from "react";
import { NavLink, Route } from 'react-router-dom';
import Userdetail from '../Userdetail/Userdetail';
import './userlist.css'

export default function Userlist(props) {

  function addClass(ev){
    let cards = document.querySelector('.cards')
    console.log(cards);
    cards.classList.add('selected');
  }

  // useEffect(() => {
  //   let cards = document.querySelector(".cards");
  //   if(true){
  //     cards.classList.add("selected");
  //   } else {
  //     cards.classList.remove('selected');
  //   }
  // }, []);

  return (
    <div className="userlist">
      <div className="cards">
        {props.userdata.length === 0 && <p>There are no user yet</p>}
        {props.userdata.map((user, index) => (
          <div key={index + 1}>
            <NavLink to={`/userlist/${index + 1}`}>
              <div className="card" onClick={addClass}>
                <div className="userPhoto">
                  <img src={user.picture.medium} alt="" />
                </div>
                <div className="userInfo">
                  <p>{`${user.name.first} ${user.name.last}`}</p>
                  <p>{user.email}</p>
                  <p>{user.cell}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="userDetails">
        <Route path="/userlist/:id">
          <Userdetail
            findUser={props.findUser}
            addClass={addClass}
            usersCount={props.userdata.length}
          />
        </Route>
      </div>
    </div>
  );
}

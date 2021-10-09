import { NavLink, Route } from 'react-router-dom';
import Userdetail from '../Userdetail/Userdetail';
import './userlist.css'

export default function Userlist(props) {

  function findUser(id) {
    return props.userdata.find((user, index) => parseInt(id) === index + 1)
  }

  return (
    <div className="userlist">
      <div className="cards">
        {props.userdata.length === 0 && <p>There are no user yet</p>}
        {props.userdata.map((user, index) => (
          <div key={index + 1}>
            <NavLink to={`/userlist/${index + 1}`}>
              <div className="card">
                <div className="userPhoto">
                  <img src={user.picture.medium} alt="" />
                </div>
                <div className="userInfo">
                  <p>{`${user.name.first} ${user.name.last}`}</p>
                  <p>{user.email}</p>
                  <p>{user.cell}</p>
                  <p>{index + 1}</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="userDetails">
        <Route path="/userlist/:id">
          <Userdetail findUser={findUser} />
        </Route>
      </div>
    </div>
  );
}

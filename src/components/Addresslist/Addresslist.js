import React from "react";
import { NavLink} from "react-router-dom";
import './addresslist.css'

export default function Addresslist(props) {
  return (
    <div className="addressPage">
      <div className="tableArea">
        {props.userdata.length === 0 && <p>There are no user yet</p>}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {props.userdata
              .map((user, index) => (
                <tr key={index + 1}>
                  <td>
                    <NavLink to={`/userlist/${index + 1}`}>
                      {user && `${user.name.first} ${user.name.last}`}
                    </NavLink>
                  </td>
                  <td>
                    <p>
                      {user &&
                        `${user.location.postcode} ${user.location.street.number} ${user.location.street.name}`}
                    </p>
                    <p>
                      {user &&
                        `${user.location.city}, ${user.location.state}, ${user.location.country}`}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="userDetails">
        <Route path="/userlist/:id">
          <Userdetail findUser={props.findUser} />
        </Route>
      </div> */}
    </div>
  );
}

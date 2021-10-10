import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Userdetail({ findUser, addClass }) {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setUser(findUser(id));
    addClass();
    //console.log(user)
    //console.log(id)
  }, [findUser, id]);

  return (
    <>
      <div className="userDetailCard">
        <img src={user && user.picture.large} alt="" />
        <div className="infoPair">
          <h3>Name</h3>
          <p>{user && `${user.name.first} ${user.name.last}`}</p>
        </div>
        <div className="infoPair">
          <h3>Address</h3>
          <p>
            {user &&
              `${user.location.postcode} ${user.location.street.number} ${user.location.street.name}`}
          </p>
          <p>
            {user &&
              `${user.location.city}, ${user.location.state}, ${user.location.country}`}
          </p>
        </div>
        <div className="infoPair">
          <h3>uuid</h3>
          <p>{user && user.login.uuid}</p>
        </div>
        <div className="infoPair">
          <h3>Username</h3>
          <p>{user && user.login.username}</p>
        </div>
        <div className="infoPair">
          <h3>Password</h3>
          <p>{user && user.login.password}</p>
        </div>
      </div>
    </>
  );
}

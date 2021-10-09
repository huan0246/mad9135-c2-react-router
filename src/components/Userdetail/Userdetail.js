import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Userdetail({ findUser }) {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setUser(findUser(id));
    console.log(user)
    console.log(id)
  }, [findUser, id])

  return (
    <>
      <p>This is {id} user detail page</p>
      <p>Name: {user && user.name.first}</p>
    </>
  );
}

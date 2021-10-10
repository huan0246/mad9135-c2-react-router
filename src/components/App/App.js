import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Userlist from "../Userlist/Userlist";
import Addresslist from "../Addresslist/Addresslist";
import Not from "../Not/Not";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState([]);

  async function fetchData() {
    let url =
      "https://randomuser.me/api/?results=20&seed=huan0246&nat=au,ca,nz,gb,us&format=json";
    let res = await fetch(url);
    let data = await res.json();
    setUserData(data.results);
    console.log(data.results);
  }

  function findUser(id) {
    return userData.find((user, index) => parseInt(id) === index + 1);
  }


  useEffect(() => {
    console.log("useEffect in App was called");
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/userlist">
            <Userlist userdata={userData} findUser={findUser} />
          </Route>
          <Route path="/addresslist">
            <Addresslist userdata={userData} findUser={findUser}/>
          </Route>
          <Route path="/not">
            <Not />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/not" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

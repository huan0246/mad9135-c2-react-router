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
    removeAnime();
    console.log(data.results);
  }

  function findUser(id) {
    return userData.find((user, index) => parseInt(id) === index + 1);
  }

  function addAnime(){
    let overlay = document.querySelector(".overlay");
    overlay.classList.add('active');
    let loadingMsg = document.querySelector(".loadingMsg");
    let msg = "Loading user data ...";
    let msgArr = msg.split("");
    msgArr.forEach((char, index) => {
      let span = document.createElement('span');
      span.innerHTML = `${char}`
      span.style.animation = `loadingAn 1s ease-in ${index / 10}s infinite`;
      loadingMsg.append(span);
    })
  }

  function removeAnime(){
    let overlay = document.querySelector(".overlay");
    overlay.classList.remove("active");
    let msgArr = document.querySelectorAll(".loadingMsg > span");
    msgArr.forEach((span) => {
      span.removeAttribute('style');
    })
  }

  useEffect(() => {
    console.log("useEffect in App was called");
    addAnime();
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="overlay">
        <p className="loadingMsg"></p>
      </div>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/userlist">
            <Userlist userdata={userData} findUser={findUser} />
          </Route>
          <Route path="/addresslist">
            <Addresslist userdata={userData} findUser={findUser} />
          </Route>
          <Route path="/not">
            <Not userData={userData} />
          </Route>
          <Route path="/" exact>
            <Home userData={userData} />
          </Route>
          <Redirect to="/not" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Userlist from "../Userlist/Userlist";
import Userdetail from "../Userdetail/Userdetail";
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
          {/* <Route path="/userdetail/:id">
            <Userdetail/>
          </Route> */}
          <Route path="/userlist">
            <Userlist userdata={userData} />
          </Route>
          <Route path="/addresslist">
            <Addresslist />
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

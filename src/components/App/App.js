import './App.css';
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Userlist from '../Userlist/Userlist'
import Addresslist from '../Addresslist/Addresslist'
import Not from '../Not/Not'
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/userlist">
            <Userlist />
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

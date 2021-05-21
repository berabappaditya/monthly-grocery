import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homebd from "./components/Homebd";
import Registration from "./components/Registration";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/home">
            <Homebd />
          </Route>
          <Route path="/signing">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

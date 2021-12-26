import React, { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Regionss from "./components/Regionss";
import Region from "./components/Region";
import Personal from "./components/Personal";
import Investors from "./components/Investors";
import Oxagon from "./components/Oxagon";
import SECTORS from "./components/SECTORS";
 import BeAnAnvestor from "./components/BeAnAnvestor";
import { Route } from "react-router";
export default function App() {
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   if(!token && localStorage.getItem("token") !== ""){
  //     setToken(localStorage.getItem("token"))
  //   }
  // }, [])

  return (
    <div>
      <NavBar token={token} setToken={setToken} />

      <Route
        exact
        path="/Regionss"
        render={() => {
          return <Regionss token={token} />;
        }}
      />

      <Route
        exact
        path="/SECTORS"
        render={() => {
          return <SECTORS token={token} />;
        }}
      />
      <Route
        exact
        path="/Region"
        render={() => {
          return <Region token={token} />;
        }}
      />
      <Route
      exact
      path="/Oxagon"
      render={() => {
        return <Oxagon token={token} />;
      }}
    />
    <Route
      exact
      path="/BeAnAnvestor"
      render={() => {
        return <BeAnAnvestor token={token}/>;
      }}
    />
    
  
      <Route
        exact
        path="/login"
        render={() => {
          return <Login setToken={setToken} />;
        }}
      />
      <Route exact path="/signUp" component={SignUp} />

      <Route
        exact
        path="/Personal"
        render={() => {
          return <Personal token={token} />;
        }}
      />
      <Route
        exact
        path="/Investors"
        render={() => {
          return <Investors token={token} />;
        }}
      />
    </div>
  );
}

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/Login.css"
import axios from "axios";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  const history = useHistory();
  const interEmail = (e) => {
    setEmail(e.target.value);
  };
  const enterPassword = (e) => {
    setPassword(e.target.value);
  };

  const enterLogin = async () => {

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email:email, password:password
      });
      setToken(response.data.token);
      // localStorage.setItem("token", JSON.stringify(response.data.token))
      history.push("/Regionss");
    } catch (error) {
      console.log(error);
    }
  };
  return ( 
    <div  id="main-conteners">
   
    <div>
    <h2 id="log">sign in</h2>
    <label>Email</label>
    <br/>
      <input id="inpu11" onChange={(e) => {interEmail(e); }} placeholder="enter your email"/><br/>
      <label>Password</label>
      <br/>
      <input id="input22" onChange={(e) => { enterPassword(e); }} type="password" placeholder="enter your password"/>
      <br/>
      
      <button id="btn1" onClick={() => { enterLogin();}}>
        Login
      </button>
      </div>
    </div>
  );
}

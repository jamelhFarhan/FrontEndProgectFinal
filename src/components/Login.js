import React, { useState } from "react";
import { useHistory } from "react-router-dom";
 
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
      localStorage.setItem("token", JSON.stringify(response.data.token))
      history.push("/Product");
    } catch (error) {
      console.log(error);
    }
  };
  return ( 
    <div>
    <div>
      <input 
        onChange={(e) => {
          interEmail(e);
        }}
        placeholder="enter your email"
      />
      
      
      <input
        onChange={(e) => {
          enterPassword(e);
        }}
        type="password"
        placeholder="enter your password"
      />
      
      
      <button 
        onClick={() => {
          enterLogin();
        }}
      >
        Login
      </button>
      </div>
    </div>
  );
}

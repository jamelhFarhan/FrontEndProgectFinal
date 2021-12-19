import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../style/SingUp.css"
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const addUser = async () => {
    console.log({
      name: name,
      email: email,
      password: password,
    });
    try {
      const response = await axios.post("http://localhost:5000/signUp", {
        name: name,
        email: email,
        password: password,
      });
      console.log(response);
      if (response.status === 201) {
        history.push("/login");
      }
    } catch (error) {
      console.log("err");
    }
  };
  return (
    <div>
      <div id="maindiv">
        <input 
          onChange={(e) => {
            changeName(e);
          }}
          type="text" autoComplete="off" required  placeholder="enter your name"
        />
         <label for="Name" className="lable-name"></label>
         <span className="content-name">Name</span>
        <input
          onChange={(e) => {
            changeEmail(e);
          }}
          placeholder="enter your email"
        />
        <input
          onChange={(e) => {
            changePassword(e);
          }}
          type="password"
          placeholder="enter your password"
        />
        <button
          onClick={() => {
            addUser();
          }}
        >
          sign up
        </button>
      </div>
    </div>
  );
}

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
    // if( name !==""&&email !==""&& password!=="" )
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
      <label>Name</label>
        <input onChange={(e) => {  changeName(e);}} placeholder="enter youe name"/>
       <br/>
         <label>Email</label>
        <input onChange={(e) => {changeEmail(e);}} placeholder="enter your email"/>
        <br/>
        <label>Password</label>
        <input onChange={(e) => { changePassword(e); }} type="password" placeholder="enter your password" />
        <br/>
        <button onClick={() => {addUser(); }}> sign up</button>
      </div>
    </div>
  );
}

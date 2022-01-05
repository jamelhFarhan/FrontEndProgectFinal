import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../style/SingUp.css"
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Identity ,setIdentity]=useState("");
 
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
  const changeIdentity=(e)=>{
    setIdentity(e.target.value);
  }

  const addUser = async () => {
  
    console.log({
      name: name,
      email: email,
      password: password,
      Identity:Identity,
    });
    try {
      const response = await axios.post("http://localhost:5000/signUp", {
        name: name,
        email: email,
        password: password,
        Identity:Identity,
      });
      console.log(response);
    
      if (response.status === 201) {
        history.push("/login");
      }
    } catch (error) {
      // console.log("err");
    } 
  };
  return (
    <div id="formInput">
      <div>
      <h2 id="Register">Register</h2>
      <form >
      <label>Name</label><br/>
        <input onChange={(e) => {  changeName(e);}} placeholder="enter youe name"  id="input1"/>
       <br/>
         <label>Email</label><br/>
        <input onChange={(e) => {changeEmail(e);}} placeholder="enter your email" id="input2"/>
        <br/>
        <label>Password</label><br/>
        <input onChange={(e) => { changePassword(e); }} type="password" placeholder="enter your password" id="input3"/>
        <br/>
        <label>Identity</label><br/>
        <input onChange={(e)=>{changeIdentity(e); }} id="input3"  placeholder="enter your Identity"></input><br/>
        <button onClick={() => {addUser(); }}  id="btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

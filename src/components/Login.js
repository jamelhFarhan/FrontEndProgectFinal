import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../style/Login.css"
 import www from "../video/www.mp4"
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
     
      history.push("/Regionss");
      
    } catch (error) {
      console.log(error);
    }
  };








  return ( 
    <>


    <video 
    autoPlay loop muted
     style={{ position:"fixed" ,
      width:"100%",
      left:"0%",
      top:"0%",
     
    objectFit:"cover",
    transorm:"translate(-50%, -50%)",
    zIndex:"-1",
    height:"150%"
    }}
   >
  
   <source   src={www} type="video/mp4"/>



   
  </video>


    <div  id="main-conteners">
   
    <div>
    <div id="log">
    <img id="tt" src="https://yt3.ggpht.com/ytc/AKedOLRZiVaOhiyopxkS1brKSeKMrG9aOxkK020nA1BaSA=s176-c-k-c0x00ffffff-no-rj"  width={130}/>
    <br/>
    <br/>
    
    <h2 >Welcome to Neom</h2>
    </div>

    <label id="lable">Email</label>
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
   
    </>
  );
}

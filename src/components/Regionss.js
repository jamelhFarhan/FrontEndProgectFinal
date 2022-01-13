import React, { useState } from "react";
import { useHistory } from "react-router-dom";
 import www from "../video/www.mp4"

import "../style/Regions.css"
export default function Regionss() {

  
  const history = useHistory();
  const  theLine= (e) => {
    history.push("/Region");
  };

  const  Oxagons= (e) => {
    history.push("/Oxagon");
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
    
     <source src={www} type="video/mp4"/>



     
     </video>    
    <div id="rundiv">
    <div className='images'>
     <div className='imgee-container'>
     <p className="id">A revolution in urban and tourist life</p>
     <img  src='https://wired.me/wp-content/uploads/2021/01/Saudi-Arabia-the-line-neom.jpg'/>
   
     <div className="reg-div-con">
     <button id="buttonOne"
        onClick={() => { theLine()}} > THE LINE
         </button></div>
     </div>
     
     <div className='imgee-container'>
     <p className="id">An open city for industry and investment</p>
     <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0qWLKFJEWFJbKle4nily4juSU5PHRNu9enA&usqp=CAU'/>
     <div className="reg-div-con">
     <button id="buttonOne"
     onClick={() => { Oxagons()}} > OXAGON
      </button></div>
     </div>
    
     </div>
     </div>
     </>
    )
}

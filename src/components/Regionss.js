import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
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
      
           
    <div id="rundiv">
    <div className='images'>
     <div className='imgee-container'>
     
     <img  src='https://i.pinimg.com/564x/0e/11/28/0e112874b7cffb158aeeb406f1ed76bf.jpg'/>
     <div className="reg-div-con">
     <button id="buttonOne"
        onClick={() => { theLine()}} > THE LINE
         </button></div>
     </div>
    
     <div className='imgee-container'>
     <img  src='https://neom.scene7.com/is/image/neom/replacement%204_2x?scl=1'/>
     <div className="reg-div-con">
     <button id="buttonOne"
     onClick={() => { Oxagons()}} > OXAGON
      </button></div>
     </div>
    
     </div>
     </div>
   
    )
}

import React from 'react'
import "../style/Oxagon.css"
import { useHistory } from "react-router-dom";
 import oxgon from "../video/oxgon.mp4"
export default function Oxagon({token}) {
    const history = useHistory();
    const invrstment = () => {
      history.push("/BeAnAnvestor");
    };
    return (
        <div>
        <video 
        autoPlay muted 
      // style={{ position: "fixed",
      //   top: "0", higth:"100"
      // }}
       >
      
       <source src={oxgon} type="video/mp4"/>
       </video>
      
        <div>
        <p  id='pargraph-x'>
        LIKE NOWHERE ELSE ON EARTH, THIS PIONEERING <br/>
        <br/>
        COGNITIVE CITY IS A PLACE WHERE BUSINESSES,<br/>
        <br/>
        <p id="small-para">INDUSTRIES AND LIVES ARE BUILT.</p>
        </p>
    <p  id="pargraph-y">
    It will be home to the most forward thinking and visionary companies.<br/>
    Forget what you know about the polluted and congested industrial ports <br/>
    of the past, this is a giant leap forwards - breathing new life into manufacturing <br/>
    Seamlessly integrating nature with technology,  <br/>
    it will be the launchpad where moonshots become reality <br/>
    The setting for leaders and their teams to push beyond traditional boundaries <br/>
    And the blueprint for the future of work, living and sustainability. <br/>
    If you are an innovator at a game-changing company,  <br/>
    this is the community you should be a part of. It is time to pivot beyond the norms.
    
    </p>
        
        </div>
        <div id='oxagon'>


      
      <p id="paraDiv">
      .
      </p>
      
      <h2 id="h2-oxagon">
      <h6>JOIN US ON OUR MISSION TO </h6><br/> <br/>
      REIMAGINE THE FUTURE OF WORK, <br/><br/>
      LIVING AND SUSTAINABILITY.
      </h2>
         <p id='pargraf-10'>
         If you are looking to launch a company, service or product at OXAGON – or you would simply , <br/>
         <br/>
         like to receive updates on our progress – then reach out to us now. Our state-of-the-art
         </p>
         <p id="smaler-para">investor care center is here to guide you through the process.</p>


        </div>
     <div id='div-div-invest'>
     <h6 id='rrrrrrrr'>.</h6>
     <h2 id='mmany-h'>NEOM IS AN <br/>
     ACCELERATOR OF 
     </h2>
     <h2 id='human-pro'>HUMAN PROGRESS</h2>
     <div id='div-oxgon-for'>
     <span>
     NEOM IS AN ACCELERATOR OF HUMAN PROGRESS <br/> THAT WILL EMBODY THE FUTURE OF INNOVATION <br/> IN BUSINESS, LIVABILITY AND  SUSTAINABILITY.
     </span>
     <span>
     NEOM OFFERS MANY UNIQUE INVESTMENT <br/> OPPORTUNITIES OF DIFFERENT SIZES ACROSS <br/> MULTIPLE INDUSTRIES.
     </span>
     </div>
     
     <button id='mybtn1' onClick={() => { (invrstment())}} > Invest with <br/>NEOM</button>
     
     
    
 
  
     </div>
     
     <div id='fanal-page'>
    <br/>
    <br/>
    <br/>
    <br/>
   <div id='arar'>
   <p id='ab'>WELCOME TO OUR LIVING LABORATORY _ </p> <br/>
   <p id='ac'> A PLACE WHERE ENTREPRENEURSHIP WILL CHART</p>
   <p id='ass'> THE COURSE FOR THE NEW FUTURE.</p>
  
  
   <ol id='aa'>
   <li>Privacy policy</li>
   <li>Terms of Use</li>
   <li>Cookie Policy</li>
   <i>© 2021 NEOM</i>
   </ol>

   </div>
     </div>
       
        </div>
    )
}

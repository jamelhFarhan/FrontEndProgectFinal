import React from 'react'

 import twitt from "./mdea/twitt.png"
 import github from "./mdea/github.png"
 import youtub from "./mdea/youtub.png"
 import link from "./mdea/link.png"
 import insta from "./mdea/insta.png"

import "../style/about.css";
import { id } from 'date-fns/locale'

export default function AboutUs() {
    return (
        <div id='main-div-about'>
        <div id='mmmm-about'>
  
        </div>
        <div >
        <p id='about-neom'>NEOM is a bold and audacious dream of 
        a New<br/> Future, an accelerator of human progress
         <br/>that will embody the future of innovation <br/>
        in business, livability and sustainability.<br/>
         NEOM is one of the Public Investment<br/> 
         Fund’s projects.</p>

         <p id='para-2-about'>Built on the Red Sea in northwest Saudi Arabia, NEOM is a <br/>
          living laboratory – a place where entrepreneurship and <br/> 
          innovation will chart the course for this New Future. 
          <br/> 
          <br/>
          <br/> 
          <br/>  
        It will be a destination; for people who dream big and want
           <br/>to be part of building a new model for sustainable<br/>
            and prosperous living.
            <br/>
            <br/>
            <br/>
            <br/>
            The NEOM project aims to achieve exceptional livability,
            <br/> thriving businesses and reinventing conservation,
             <br/>in line with Saudi Vision 2030.
            
        
            </p>
            
        </div>
        <h2 id='Objectives'>Project Objectives</h2>
        <div id='ab-out-4'>
        </div>
        <div id='about-d'>
        <h3 id='about-5'>tourism</h3>
        <p id='about-6'>Attracting the largest number of tourists <br/>
       and Creating better conditions for tourists at the level of capabilities and organization
        <br/>
        and Ensure the regular development of tourism. 
        </p>
        
        </div>
       <div id='about-9'>
       </div>
         


        <div id='about-7-div'>
       
        </div>
        <div id='dev-dev'>
        <h3 id='div-in-div'>investment</h3>
        <p id='baragraf-about'>NEOM aims to be an attractive and stimulating  investment and NEOM is keen to identify 
        <br/>and develop investment opportunities and stimulate 
        <br/>local investment by providing <br/>facilities and services to the investor.
         </p>
        </div>

        <div id='finaly-div-about'>
        <h6 id='qq'>.</h6>
        <h3 id='Connect'>Connect with us <br/>
        <p id='jamelh-email'>Email: jamailafarhan85@gamil.com</p>
        <p id='tel'>Tel : +966558740175</p>
        </h3>
        <h3 id='folow-neom'>Follow NEOM</h3>
         <ul id='mainContener-ul'>
         
       
         
         <li>
         <a
         href="https://github.com/jamelhFarhan?tab=repositories"
         target="_NEOM"
       >
       <img src={github}
       className="guthub"
       title="GitHub"
       
       alt="guthub"
     />
       </a>
       </li>


       
       <li>
       <a
       href="https://twitter.com/j_8855"
       target="_NEOM"
     >
     <img src={twitt}
     className="guthub"
     title="twitter"
     
     alt="twitter"
   />
     </a>

     </li>

     <li>
     <a
     href="https://www.youtube.com/channel/UCU2yVzyaauEhJmBSfOZcLEw"
     target="_NEOM"
   >
   <img src={youtub}
   className="guthub"
   title="youtub"
   
   alt="youtub"
 />
   </a>

   </li>
   
   <li>
   <a
   href="https://www.linkedin.com/in/jamelhfarhan/"
   target="_NEOM"
 >
 <img src={link}
 className="guthub"
 title="linkedin"
 
 alt="linkedin"
/>
 </a>

 </li>


 <li>
 <a
 href="https://www.instagram.com/j_a_1994/"
 target="_NEOM"
>
<img src={insta}
className="guthub"
title="instagram"

alt="instagram"
/>
</a>

</li>
   
     
         </ul>
        <h5 id='final_2020'> @ 2021 NEOM</h5>
        </div>
        
        </div>
    )
}

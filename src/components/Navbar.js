import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Nav.css"
export default function Navbar({ token, setToken }) {
  const history = useHistory();
  return (
    <div className="topbarr1">
    
    <nav>
    
   
  <div className="nav-linkes">
      {token ? (
        <ul>
   <li>
        <Link className="link" to="/Regionss">
      
        REGIONS
        </Link>
   </li>


          
          <li>
            <Link className="link" to="/Personal">
         
                PERSONAL PAGE
            </Link>
          </li>


      
      
        
        <li>
        <Link className="link" to="/AboutUs">
       
       
        ABOUT US
        </Link>
      </li>
          <li>
            <Link
              className="link"
              to="/login"
              onClick={() => {
                setToken("");
               
              }}
            >
           
              LOG OUT
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="link" to="/login">
             
            
            LOGIN
            </Link>
          </li>
          <li>
            <Link className="link" to="/signUp">
            SING UP 
           
            </Link>
          </li>
        </ul>

      )}
      </div>
    
     
      </nav>
    </div>
  );
}
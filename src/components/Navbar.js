import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Nav.css"
export default function Navbar({ token, setToken }) {
  const history = useHistory();
  return (
    <div>
    <nav>
    
   
    <img id="img" src="https://www.neom.com/content/dam/neom/logos/logo-neom.png"/>
  <div className="nav-linkes">
      {token ? (
        <ul>
   <li>
        <Link className="link" to="/Regionss">
      
        REGIONSS
        </Link>
   </li>


          
          <li>
            <Link className="link" to="/Personal">
         
                PERSONAL PAGE
            </Link>
          </li>


          <li>
          <Link className="link" to="/BeAnAnvestor">
         
          BeAnAnvestor
          </Link>
        </li>
      
      
        
        <li>
        <Link className="link" to="/SECTORS">
       
        SECTORS
        </Link>
      </li>
          <li>
            <Link
              className="link"
              to="/login"
              onClick={() => {
                setToken("");
                localStorage.setItem("token", "")
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
             
              LOG IN
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
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../style/Nav.css"
export default function Navbar({ token, setToken }) {
  const history = useHistory();
  return (
    <div>
    <nav>
    
   
    <img id="img" src="https://yt3.ggpht.com/ytc/AKedOLRZiVaOhiyopxkS1brKSeKMrG9aOxkK020nA1BaSA=s176-c-k-c0x00ffffff-no-rj-mo"/>
  <div className="nav-linkes">
      {token ? (
        <ul>
   <li>
        <Link className="link" to="/Regionss">
      
        REGIONSS
        </Link>
   </li>



    <li>
  <Link className="link" to="/Region">
           
            REGION
            </Link>
   </li>

         


          
          <li>
            <Link className="link" to="/Personal">
         
                PERSONAL PAGE
            </Link>
          </li>


          <li>
          <Link className="link" to="/investors">
         
          INVESTORS
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
import React from "react";
import { Link, useHistory } from "react-router-dom";
export default function Navbar({ token, setToken }) {
  const history = useHistory();
  return (
    <div>
      {token ? (
        <ul>
   <li>
        <Link className="link" to="/Regionss">
        Regionss
        </Link>
   </li>



    <li>
  <Link className="link" to="/Region">
            Region
            </Link>
   </li>

         


          
          <li>
            <Link className="link" to="/Personal">
            personal page

            </Link>
          </li>


          <li>
          <Link className="link" to="/investors">
          investors
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
              log out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link className="link" to="/login">
              login
            </Link>
          </li>
          <li>
            <Link className="link" to="/signUp">
              signUp
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
import React, { useState, useEffect } from "react";
import axios from "axios";
import"../style/Personal.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
export default function Personal({ token }) {
  const [Like, setLike] = useState([]);
 


  useEffect(async () => {
    try {
      if (token) {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/like`, {
          headers: { authorization: "Bearer " + token },
        });
        setLike(result.data);
      
        console.log(result.data, "likes");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }, []);

  const removFavourites = async (id, i) => {
    const result = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/unlike/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(result.data);
    const copied = [...Like];
    copied.splice(i, 1);
    setLike(copied);
  };

  return (
    <div id="imgper">
  
      {Like.map((elem, i) => {
        return (
          <div id="dev-dev-personal">
            <p  id="name-personal">Name:  {elem.name} </p>

            <img id="img-personal" src={elem.img} alt="no" />
            <br/>
            <br/>
            <p id="desc-personal">description: <br/> {elem.description}</p>
            <button id="butn-brsonal"
              onClick={() => {
                removFavourites(elem._id, i);
              }}
             >
             
              
              REMOVE
            </button>
           
         
          </div>
        );
      })}
    </div>
  );
}

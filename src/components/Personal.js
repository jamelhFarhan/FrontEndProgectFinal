import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Personal({ token }) {
  const [Like, setLike] = useState([]);

  useEffect(async () => {
    try {
      if (token) {
        const result = await axios.get("http://localhost:5000/like", {
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
    const result = await axios.delete(`http://localhost:5000/unlike/${id}`, {
      headers: { authorization: "Bearer " + token },
    });
    console.log(result.data);
    const copied = [...Like];
    copied.splice(i, 1);
    setLike(copied);
  };

  return (
    <div>
      <h1>hay from Personal</h1>
      {Like.map((elem, i) => {
        return (
          <div>
            <p>{elem.name}</p>

            <img src={elem.img} alt="no" />
            <button
              onClick={() => {
                removFavourites(elem._id, i);
              }}
            >
              remove
            </button>
            <p>{elem.description}</p>
          </div>
        );
      })}
    </div>
  );
}

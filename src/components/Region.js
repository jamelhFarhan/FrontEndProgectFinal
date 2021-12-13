import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Region({ token }) {
  const [Regions, setRegions] = useState([]);
  const [name, setName] = useState("");
  const [description, setescription] = useState("");
  const [img, setImg] = useState("");

  useEffect(async () => {
    try {
      console.log(token, "token here");
      const findRegin = await axios.get("http://localhost:5000/getRegions", {
        headers: { authorization: "Bearer " + token },
      });
      setRegions(findRegin.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const FuncName = (e) => {
    setName(e.target.value);
  };
  const FuncDesc = (e) => {
    setescription(e.target.value);
  };
  const FuncImg = (e) => {
    setImg(e.target.value);
  };
  //////////////////////////add////
  const addRegion = async () => {
    try {
      const result = await axios.post(
        "http://localhost:5000/addRegion",
        {
          name: name,
          description: description,
          img: img,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copiArr = [...Regions];
      copiArr.push(result.data);
      setRegions(copiArr);
    } catch (error) {
      console.log("errrorrr here");
    }
  };

  /////////delete/////////
  const deleteRegions = async (id, i) => {
    try {
      const severes = await axios.delete(
        `http://localhost:5000/deletRegion/${id}`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copied = [...Regions];
      copied.splice(i, 1);
      setRegions(copied);
    } catch (error) {
      console.log("severes");
    }
  };

  return (
    <>
      <div>
        {Regions.map((element, i) => {
          return (
            <div key={element._id}>
              {/* <h1>{element.user.name}</h1> */}
              <p>name:{element.name}</p>
              <img src={element.img} alt="nooo img" />
              <p> description : {element.description}</p>
              <button
                onClick={() => {
                  deleteRegions(element._id, i);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <input
        onChange={(e) => {
          FuncName(e);
        }}
      />{" "}
      <input
        onChange={(e) => {
          FuncDesc(e);
        }}
      />{" "}
      <input
        onChange={(e) => {
          FuncImg(e);
        }}
      />{" "}
      <button
        onClick={() => {
          addRegion();
        }}
      >
        add{" "}
      </button>
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Region({ token }) {
  const [Regions, setRegions] = useState([]);
  const [name, setName] = useState("");
  const [description, setescription] = useState("");
  const [img, setImg] = useState("");
  const [search, setsearch] = useState("");
  const [updateN, setupdateN] = useState("");
  const [updateD, setupdateD] = useState("");
  const [updateimg, setupdateimg] = useState("");
  const [toggle, setToggle] = useState(false);
  //--------------------get Regin----------
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
  //////////////////////////post////
  const addRegion = async () => {
    try {
      const result = await axios.post("http://localhost:5000/addRegion",
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
      const severes = await axios.delete(`http://localhost:5000/deletRegion/${id}`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copied = [...Regions];
      copied.splice(i, 1);
      setRegions(copied);
    } catch (error) {
      console.log("error");
    }
  };
  ////////////update/////////
  const UpDateRegion = async (id, i) => {
    try {
      const Modification = await axios.put(`http://localhost:5000/updateRegion/${id}`,
        {
          name: updateN,
          description: updateD,
          img: updateimg,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const ArrayCopied = [...Regions];
      ArrayCopied[i]=Modification.data;
      setRegions(ArrayCopied);
      console.log(ArrayCopied);
    
    } catch (error) {
      console.log("ereor her");
    }
  };
  const UpDateName = (e) => {
    setupdateN(e.target.value);
  };
  const UpDateDesc = (e) => {
    setupdateD(e.target.value);
  };
  const UpDateImg = (e) => {
    setupdateimg(e.target.value);
  };

  //------------------ssersh---------
  const FiandRegin = (e) => {
    setsearch(e.target.value);
  };
  const FuncSearsh = () => {
    const FuncSearsh = Regions.filter((element) => {
      if (element.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return element;
      }
    });
    setRegions(FuncSearsh);
    return FuncSearsh;
  };
  return (
    <>

   
    

   
      <div>
        <div>
          <input  placeholder="search" onChange={(e) => { FiandRegin(e);}} />
           <button onClick={() => { FuncSearsh(); }} > searsh </button>
        </div>

        <br />
        <br />
        {Regions.map((element, i) => {
          return (
            <div key={element._id}>
              <p>name:{element.name}</p>
              <img src={element.img} alt="no img" />
              <p> description : {element.description}</p>
              <button onClick={() => { deleteRegions(element._id, i);}} >  delete{" "}</button>
              <button onClick={() => { UpDateRegion(element._id, i); }}> submet </button>
            


              <div>
              <button onClick={() => { setToggle(!toggle); }}>update </button>
              {toggle === true ? (
                <form>
                  <input onChange={(e) => { UpDateName(e); }}placeholder="updateName"/>{" "}
                  <br />
                  <input onChange={(e) => { UpDateDesc(e); }} placeholder="updateDescription" />{" "}
                  <br />
                  <input onChange={(e) => { UpDateImg(e);}}placeholder="updateImg" />{" "}
                  <br />
                </form>
              ) : (
                ""
              )}
            </div>
            <br />

            </div>
          );
        })}
      </div>
      <input onChange={(e) => { FuncName(e); }} placeholder="name"/>{" "}
      <input  onChange={(e) => { FuncDesc(e); }} placeholder="description"/>{" "}
      <input onChange={(e) => { FuncImg(e); }}placeholder="img"/>{" "}
      <button onClick={() => {addRegion();}}> add</button>{" "}



    </>
  );
}

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function Region({ token }) {
  const history = useHistory();
  const [Regions, setRegions] = useState([]);
  const [name, setName] = useState("");
  const [description, setescription] = useState("");
  const [img, setImg] = useState("");
  const [search, setsearch] = useState("");
  const [updateN, setupdateN] = useState("");
  const [updateD, setupdateD] = useState("");
  const [updateimg, setupdateimg] = useState("");
  const [toggle, setToggle] = useState(false);
  const [adminToggil, setAdminToggil] = useState(false);
  // import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
  ////////

  //--------------------get Regin----------
  useEffect(async () => {
    try {
      // console.log(token, "token here");
      const findRegin = await axios.get("http://localhost:5000/getRegions", {
        headers: { authorization: "Bearer " + token },
      });
      //  console.log(findRegin);
      // object all element
      setRegions(findRegin.data);
      setupdateN(findRegin.data.updateN);
      setupdateimg(findRegin.data.updateimg);
      setupdateD(findRegin.data.updateD);
      // console.log(findRegin.data);
      // arry of object all data
    } catch (error) {
      console.log(error);
    }

    try {
      const Admaien = await axios.get("http://localhost:5000/getUser", {
        headers: { authorization: "Bearer " + token },
      });

      if (Admaien.data.Admin === true) {
        setAdminToggil(true);
        console.log(Admaien);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  ///////////////////
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
      console.log(result.data);
      setName("")
      setescription("")
      setImg("")

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
      console.log(severes);
    } catch (error) {
      console.log("error");
    }
  };
  ////////////update/////////
  const UpDateRegion = async (id, i) => {
    try {
      const Modification = await axios.put(
        `http://localhost:5000/updateRegion/${id}`,
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
      ArrayCopied[i] = Modification.data;
      setRegions(ArrayCopied);
      console.log(ArrayCopied);
      setupdateN("")
      setupdateD("")
      setupdateimg("")
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
    console.log(FuncSearsh);
    setRegions(FuncSearsh);
    return FuncSearsh;
  };

  const Favorite = async (id) => {
    try {
      const result = await axios.post(
        `http://localhost:5000/like/${id}`,
        {},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>









       {adminToggil ? "" : ""}
      <div>
      
        <div>
          <input placeholder="search" onChange={(e) => { FiandRegin(e); }}/>
          <button onClick={() => { FuncSearsh(); }} > {" "} search.{" "}</button>
        </div>

        <br />
        <br />
        {Regions.map((element, i) => {
          return (
            <div key={element._id}>
              <p>name:{element.name}</p>

              <img src={element.img} alt=" " />
              <button 
                onClick={() => {  Favorite(element._id); }} >Favorite </button>
              <p> description : {element.description}</p>

              <div>
               {adminToggil? 
                <button onClick={() => { setToggle(true); }} > show{""} </button>:""}
                {adminToggil === true ? (
                  <div>
                    <button
                      onClick={() => {
                        deleteRegions(element._id, i);
                      }}
                    >
                      {" "}
                      delete{" "}
                    </button> 

                     <button  onClick={() => { UpDateRegion(element._id, i); }} > {" "}submet{" "}  </button>

                    <div>
                      <button
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {" "}
                        update{" "}
                      </button>{" "}
                      {toggle === true ? (
                        <form>
                          <input  onChange={(e) => { UpDateName(e); }} placeholder="updateName" value={updateN}/>
                          <br />
                          <input onChange={(e) => {UpDateDesc(e);}} placeholder="updateDescription" value={updateD} />
                          <br />
                          <input onChange={(e) => { UpDateImg(e); }} placeholder="updateImg"  value={updateimg}/>
                          <br />
                        </form>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <br />
            </div>
          );
        })}
      </div>
    {adminToggil? <div>
      <label for="Name">Name</label>
        <input onChange={(e) => { FuncName(e);}} placeholder="name" value={name}/>{" "}
        <br/>
        <label for="description">Description</label>
        <input onChange={(e) => { FuncDesc(e); }}  placeholder="description" value={description}/>{" "}<br/>
        <label for="img">Img</label>
        <input onChange={(e) => { FuncImg(e); }}  placeholder="img" value={img}/><br/>
        <button onClick={() => { addRegion(); }} > add</button>
      </div>:""}

      
    </>
  );
}

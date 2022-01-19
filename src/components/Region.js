import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
 import tursom from "../video/tursom.mp4"
import "../style/Region.css"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import ProgressBar from "./ProgressBar"

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
  const [favList, setFavList] = useState([])
  const [toggle, setToggle] = useState(false);
  const [adminToggil, setAdminToggil] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  

 
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

 if(token){
    try {
      const resultt = await axios.get("http://localhost:5000/like", {
          headers: { authorization: "Bearer " + token },
        }); 
        console.log(resultt.data,"likessss");
        setFavList(resultt.data); 
        console.log(resultt.data, "all of like");
    } catch (error) {
      console.log(error.response.data );
      console.log(error);
    }
  }
  }, []);



  // const removFavourites = async (id, i) => {
  //   const result = await axios.delete(`http://localhost:5000/unlike/${id}`, {
  //     headers: { authorization: "Bearer " + token },
  //   });
  
  //   console.log(result.data);
  //    const copied = [...favList];
  //    copied.splice(i, 1);
  //    setFavList(copied);
  // };

  
  
  












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
  const UpDateRegion = async (id, i ,e) => {
    e.preventDefault();
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
/////////////////////////////////
  const Favorite = async (id) => {
    try {
      const result = await axios.post(`http://localhost:5000/like/${id}`,
      { },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      
      console.log(result.data);
       setFavList(result.data)
  
    } catch (error) {
      console.log(error.response.data);
    }
  };


//// upload img 

const types = ['image/png', 'image/jpeg']; 

    const handleChange=(e)=>{
        let selected = e.target.files[0];
        console.log(selected);

if (selected && types.includes(selected.type)){
    setFile(selected);
    setError('');
} else{
    setFile(null);
    setError('Please select an image file (png or jpg)');
    
}

    }








  return (
    <>
    

 
    <div >
    <video 
        autoPlay 
         style={{width:"100%" ,height:"4%"}}
       >
      
       <source src={tursom}   type="video/mp4"/>
       </video>
    </div>
    <div id="the-line">
    <img id="img-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHmY6uU3Od46-y61h2zqlv-MHGAQfBDGdhg&usqp=CAU"/>
    <p id="mohamed">
    “I present to you THE LINE, a city of a million <br/>
    <br/>
    residents with a length of 170 km that <br/>
    <br/>
    preserves 95% of nature within NEOM, with <br/>
    <br/>
    zero cars, zero streets and zero carbon <br/>
    <br/>
                   emissions.”
    </p>
    {/*<h3 id="royle">
    His Royal Highness
    </h3>
    <h3 id="Crown">
    Mohammed bin Salman, Crown Prince and Chairman of the NEOM Company Board of Directors
  </h3>*/}
    
    
    </div>


   
       {adminToggil ? "" : ""}
<br/>

    


     <div>
     <h1 id="NEOM-Resorts">NEOM Resorts</h1>
     <input id="cearsh" placeholder="search" onChange={(e) => { FiandRegin(e); }}/>
     <ImageSearchIcon id="search-main" onClick={() => { FuncSearsh(); }} > {" "} search.{" "}</ImageSearchIcon>
     </div>
      
        

        <br />
        <br />
      
        <div >
        {Regions.map((element, i) => {
       
               
              console.log(element._id );
             
             
            
            
          return (
          
            <div id="" key={element._id}>
              <p id="name-theline">name:{element.name}</p>

              <img id="img-regoin" src={element.img} alt=" " />
              
              <p id="desc-theline"> description : <br/>{element.description}</p>
              <br/>
              <br/>
             
               <button id="fivert" onClick={() => {  Favorite(element._id); }} >❤</button> 
                         
              <div>
            
              
                
                {adminToggil === true ? (
                  <div>
                    <button id="delet-theline"
                      onClick={() => {
                        deleteRegions(element._id, i);
                      }}
                    >
                      {" "}
                      Delete {" "}
                    </button> 
                     <br/>


                    <div>
  <button  id="update-theline" onClick={() => { setToggle(!toggle); }}  > {" "}UpDate{" "}</button>
                      {toggle === true ? (
                        <form id="form-theline">
                          <input id="input-theline-up" onChange={(e) => { UpDateName(e); }} placeholder="updateName" value={updateN}/>
                          <br />
                          <input id="input-theline-updes" onChange={(e) => {UpDateDesc(e);}} placeholder="updateDescription" value={updateD} />
                          <br />
                          <input  id="input-theline-img" onChange={(e) => { UpDateImg(e); }} placeholder="updateImg"  value={updateimg}/><br/>
                          <br/>
                          <button id="edetheline"  onClick={(e) => { UpDateRegion(element._id, i,e); }} > {" "}save{" "}  </button>
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
                <hr/>
              <br />
            </div>
          );
        })}
        </div>
        
    {adminToggil? <div>
      <div className="insertadmin">
      <label className="lable" for="Name">Name</label>
        <input  className="input" onChange={(e) => { FuncName(e);}} placeholder="name" value={name}/>{" "}
        <br/>
        
        <label className="lable" for="description">Description</label>
        <input className="input" onChange={(e) => { FuncDesc(e); }}  placeholder="description" value={description}/>{" "}<br/>
        <label className="lable"  for="img">Img</label>
        <input className="input" onChange={(e) => { FuncImg(e); }}  placeholder="img" value={img}/><br/>
        <div>
        <label>
        <input type="file" onChange={handleChange} />
       
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile}  setImg={setImg}/> }
      </div>
        </div>
        <button id="add" onClick={() => { addRegion(); }} > add</button>
         </div>        

      </div>:""}
      

      
    </>
  );
}

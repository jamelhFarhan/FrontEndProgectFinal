
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// import xxvv from "./video/xxvv.mp4";
import "../style/beanenvestory.css"
export default function BeAnAnvestor({token}) {
    const [Investors, setInvestors] = useState([])
const [name, setname1] = useState("");
const [email, setemail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [price, setprice] = useState("");
 const [userAdmin, setUserAdmin] = useState(false);
//  const [ tooglee ,settooglee] =useState(false)
 

useEffect(async () => {
    try {
      console.log(token);
      const findInvestors = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getInvestor`, {
          
        headers: { authorization: "Bearer " + token },
      });
      console.log(findInvestors);
      setInvestors(findInvestors.data);
      
       console.log(findInvestors.data);
    } catch (error) {
      console.log("errrr inv");
    }
try {
  const AdminI =await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getDamin`,{
    headers: { authorization: "Bearer " + token },
  })
  if (AdminI.data.Admin === true) {
    setUserAdmin(true);
    console.log(setUserAdmin);

  }

} catch (error) {
 console.log("error admain"); 
}



  }, []);
  ///////////////////
  const addInvestors = async () => {
    try {
      const result1 = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/addInvestors`,
        {
            name: name,
            email : email,
            phoneNumber:phoneNumber,
            price:price,
         
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copiArray = [...Investors];
      copiArray.push(result1.data);
      setInvestors(copiArray);
      setname1("")
      setemail("")
      setphoneNumber("")
      setprice("")
     
      console.log(result1.data);

     
    } catch (error) {
      console.log("errrorrr here");
    }
  };






//////////////////
const FuncName1=(e)=>{
    setname1(e.target.value); 
  } ;
  const FunceMail=(e)=>{
    setemail(e.target.value); 
  } ;
  const FuncPhone=(e)=>{
    setphoneNumber(e.target.value); 
  } ;
  const FuncPrice=(e)=>{
    setprice(e.target.value); 
  } ;

/////////////////
     

        const history = useHistory();
    const  Dashboar= () => {
      history.push("/investors");
    }
      /////////////////
    return (
      
        <div>
        
        
       {userAdmin ? "" : ""}
     
       

       <div id="pic-ground" >
     
     
     <h6>.</h6> <br/>
              <form id="div-f0rm">
              <h3 id="For-for">For a better future</h3> <br/>
              <h1 id="for2-for-2">Invest with NEOM</h1>
              <br/>
              <input  className="all-input-investor" onChange={(e) => { FuncName1(e); }} placeholder="name" value={name}/>{" "}<br/>
              <input className="all-input-investor" onChange={(e) => { FunceMail(e); }} placeholder="email" value={email}/>{" "}<br/>
              <input className="all-input-investor" onChange={(e) => { FuncPhone(e); }} placeholder="phoneNumber" value={phoneNumber} type={"number"}/>{" "}<br/>
              <input className="all-input-investor" onChange={(e) => { FuncPrice(e); }} placeholder="amount" value={price}/>{" "}<br/><br/>
            
       
              </form>
              
            

            <button id="input-invrsty0" onClick={() => {addInvestors();}}> send</button>

            </div>

            <div id="color-invest-1-1">
        <div  id="form-investor">
        {Investors.map((elem, i) => {
          return (
            <div id="all-item"  key={elem._id}>
              <p className="pb"> Name :  {elem.name}</p>
              <p>  Email :  {elem.email}</p>
              <p> Phone  :  {elem.phoneNumber}</p>
              <p> Amount : {elem.price}</p>
              <br/> 
          
              
            </div>
          );
        })}
        </div>
        <br/>
        
        {userAdmin? <div>
          <button  id="dash-b0td" onClick={()=>{Dashboar()}}>Admin Control Panel</button>
          </div>:""}
        
        </div>
        <br/>
        
        <div>

       
      



      
        
      
    
      
    
      
       

      </div>
      <br/>
     {/* {userAdmin? <div>
        <button  onClick={()=>{Dashboar()}}>Dashboar</button>
     </div>:""} */}
   
    <br/> 
    <div id="sector">
    <h6 id="nqta">.</h6>
   <div id="imation-final">
   <h2 id="Design">Design and Construction </h2>
   
   <br/>
   <p id="The-design">Be one of the investors in the design, construction and modern destinations in the city of NEOM</p>
   </div>
   <div id="gooood">
   <h2 id="mobil">Mobility</h2>
   <p>Be one of the investors in the sector of mobility and construction of roads in a modern style in the city of Neom</p><br/>
   <img id="img-mob" src="https://www.neom.com/content/dam/neom/mvp/technology-and-digital/c49-%E2%80%93-leading-the-world/04.jpg" width={550} height={340}/>
   </div>
   <div id="Sports">
   <h3 id="Sports-div">Sport</h3>
   <p id="sport-para">Be one of the investors in the sports sectors and establish gyms and digital games in the city of NEOM</p>
   
   </div>
   <div id="Entertainment">
   <h3 id="enter-tt">Entertainment </h3>
   <p id="Be-Be-para">Be one of the investors in the sectors of entertainment and establish entertainment resorts, water games and interactive games in the city of NEOM</p> <br/>
   <img id="img-img-o" src="https://www.neom.com/content/dam/neom/mvp/technology-and-digital/20211028%20CHANGEMAKERS%20EPISODE%202_Eng_no%20subs%20thumbnail.jpg" width={550} height={340} />
   </div>
   
   </div>
        </div>
    )
}

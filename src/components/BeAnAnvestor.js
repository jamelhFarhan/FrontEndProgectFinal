
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
      const findInvestors = await axios.get("http://localhost:5000/getInvestor", {
          
        headers: { authorization: "Bearer " + token },
      });
      setInvestors(findInvestors.data);
      
       console.log(findInvestors.data);
    } catch (error) {
      console.log("errrr inv");
    }
try {
  const AdminI =await axios.get("http://localhost:5000/getDamin",{
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
      const result1 = await axios.post("http://localhost:5000/addInvestors",
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
    
        </div>
    )
}


import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CreateIcon from '@material-ui/icons/Create';
import "../style/beanenvestory.css"
export default function BeAnAnvestor({token}) {
    const [Investors, setInvestors] = useState([])
const [name, setname1] = useState("");
const [email, setemail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [price, setprice] = useState("");
 const [nameUpdate ,setnameUpdate]=useState("");
 const[emailUpdate, setemailUpdate]=useState("");
 const[priceUpdate, setpriceUpdate]=useState("");
 const[phoneNumberUpdate, setphoneNumberUpdate]=useState("");
 const [userAdmin, setUserAdmin] = useState(false);
 const [togglie, setTogglie] = useState(false);

useEffect(async () => {
    try {
      console.log(token);
      const findInvestors = await axios.get("http://localhost:5000/getInvestor", {
          
        headers: { authorization: "Bearer " + token },
      });
      setInvestors(findInvestors.data);
      setnameUpdate(findInvestors.data.nameUpdate);
      setemailUpdate(findInvestors.data.emailUpdate);
      setpriceUpdate(findInvestors.data.priceUpdate);
      setphoneNumberUpdate(findInvestors.data.phoneNumberUpdate)
       console.log(findInvestors.data);
    } catch (error) {
      console.log(error);
    }
try {
  const AdminI =await axios.get("http://localhost:5000/getDamin",{
    headers: { authorization: "Bearer " + token },
  })
  if (AdminI.data.Admin === true) {
    setUserAdmin(true);
    console.log(AdminI);
  }

} catch (error) {
  
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
/////////////////

     const UpdateInvestor = async(id,i) =>{
   try {
     const datainvestor = await axios.put(`http://localhost:5000/updateInvestors/${id}`,
     {
       name: nameUpdate,
      email : emailUpdate,
       phoneNumber:phoneNumberUpdate,
       price:priceUpdate,
     },
     {
       headers: { authorization: "Bearer " + token },
     }
    
     ) ;

//   //   ///////////
    const ArrCopeeid=[...Investors];
    ArrCopeeid[i]=datainvestor.data;
    setInvestors(ArrCopeeid);
    console.log(datainvestor.data);
    setnameUpdate("")
    setemailUpdate("")
    setpriceUpdate("")
    setphoneNumberUpdate("")
  } catch (error) {
     console.log(error);
   }
       }


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



 const Upname=(e)=>{
        setnameUpdate (e.target.value); 
      };
      const Upemail=(e)=>{
        setemailUpdate (e.target.value); 
      };
      const Upprice=(e)=>{
        setpriceUpdate (e.target.value); 
      };
      const UpphoneNumber=(e)=>{
        setphoneNumberUpdate (e.target.value); 
      };
     

        const history = useHistory();
    const  Dashboar= () => {
      history.push("/investors");
    }
      
    return (
      
        <div>
        <div id="divinfest-0">
        <p id="info-investor-">.</p>
        <h1 id="info-investor-1">
        INVEST IN <br/>
        THE FUTURE OF <br/>
      <br/>
        NEOM

        </h1>
        </div>
        
       {userAdmin ? "" : ""}
     
        <div>
        <div  id="form-investor">
        {Investors.map((elem, i) => {
          return (
            <div  key={elem._id}>
              <p> {elem.name}</p>
              <p> {elem.email}</p>
              <p>{elem.phoneNumber}</p>
              <p>{elem.price}</p>
              <br/> 



               <CreateIcon
               onClick={() => {
                 setTogglie(!togglie);
               }}
             >
               {" "}
               update{" "}
             </CreateIcon>{" "}
             {togglie === true ? (
               <form>
               <input onChange={(e) => { Upname(e); }} placeholder="name" value={nameUpdate}/>{" "}<br/>
                 <br />
                 <input onChange={(e) => { Upemail(e); }} placeholder="email" value={emailUpdate}/>{" "}<br/>
                 <br />
                 <input onChange={(e) => { UpphoneNumber(e); }} placeholder="phoneNumber" type={"number"} value={phoneNumberUpdate}/>{" "}<br/>
                 <br />
                 <input onChange={(e) => { Upprice(e); }} placeholder="amount" value={priceUpdate}/>{" "}<br/>
               </form>
             ) : (
               ""
             )}
           
              
            </div>
          );
        })}
        </div>
        <br/>
     
        <input onChange={(e) => { FuncName1(e); }} placeholder="name" value={name}/>{" "}<br/>
        <input onChange={(e) => { FunceMail(e); }} placeholder="email" value={email}/>{" "}<br/>
        <input onChange={(e) => { FuncPhone(e); }} placeholder="phoneNumber" value={phoneNumber} type={"number"}/>{" "}<br/>
        <input onChange={(e) => { FuncPrice(e); }} placeholder="amount" value={price}/>{" "}<br/><br/>
        <button onClick={() => {addInvestors();}}> add</button>
       


      </div>
      <br/>
      {userAdmin? <div>
        <button  onClick={()=>{Dashboar()}}>Dashboar</button>
        </div>:""}
   
    <br/>
        </div>
    )
}

import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Investors({token}) {

const [Investors, setInvestors] = useState([])
const [name, setname1] = useState("");
const [email, setemail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [price, setprice] = useState("")
const [nameUpdate ,setnameUpdate]=useState("");
const[emailUpdate, setemailUpdate]=useState("");
const[priceUpdate, setpriceUpdate]=useState("");
const[phoneNumberUpdate, setphoneNumberUpdate]=useState("");













// <button onClick={()=> {UpdateInvestor (elem._id, i);}}>Updated{""}</button>
// <input onChange={(e) => { Upname(e); }} placeholder="name"/>{" "}
// <input onChange={(e) => { Upemail(e); }} placeholder="email"/>{" "}
// <input onChange={(e) => { UpphoneNumber(e); }} placeholder="phoneNumber"/>{" "}
// <input onChange={(e) => { Upprice(e); }} placeholder="amount"/>{" "}
///////////////
    useEffect(async () => {
        try {
          console.log(token);
          const findInvestors = await axios.get("http://localhost:5000/getInvestor", {
              
            headers: { authorization: "Bearer " + token },
          });
          setInvestors(findInvestors.data);
           console.log(findInvestors.data);
        } catch (error) {
          console.log(error);
        }
      }, []);

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
        } catch (error) {
          console.log("errrorrr here");
        }
      };

      /////////////////delete
      const deleteInvestors = async (id, i) => {
        try {
          const severes = await axios.delete(`http://localhost:5000/deletInvestors/${id}`,
            {
              headers: { authorization: "Bearer " + token },
            }
          );
          const copied = [...Investors];
          copied.splice(i, 1);
          setInvestors(copied);
          console.log(severes);
        } catch (error) {
          console.log("error");
        }
      };

      /////////////////////////////update////////////////////////////////
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

  //   ///////////
    const ArrCopeeid=[...Investors];
    ArrCopeeid[i]=datainvestor.data;
    setInvestors(ArrCopeeid);
  } catch (error) {
    console.log(error);
  }
      }


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
///////////////////////////////////
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
        
    return (
        <div>
        {Investors.map((elem, i) => {
          return (
            <div  key={elem._id}>
              <p> {elem.name}</p>
              <p> {elem.email}</p>
              <p>{elem.phoneNumber}</p>
              <p>{elem.price}</p>
              <br/> 

              
              <button onClick={()=> {UpdateInvestor (elem._id, i);}}>Updated{""}</button>
               <input onChange={(e) => { Upname(e); }} placeholder="name"/>{" "}
               <input onChange={(e) => { Upemail(e); }} placeholder="email"/>{" "}
               <input onChange={(e) => { UpphoneNumber(e); }} placeholder="phoneNumber"/>{" "}
               <input onChange={(e) => { Upprice(e); }} placeholder="amount"/>{" "}
             
               <br/>
               <button onClick={() => { deleteInvestors(elem._id, i);}} >  delete{" "}</button><br/>
             
            </div>
          );
        })}
        <br/>
        <input onChange={(e) => { FuncName1(e); }} placeholder="name"/>{" "}
        <input onChange={(e) => { FunceMail(e); }} placeholder="email"/>{" "}
        <input onChange={(e) => { FuncPhone(e); }} placeholder="phoneNumber"/>{" "}
        <input onChange={(e) => { FuncPrice(e); }} placeholder="amount"/>{" "}
        <button onClick={() => {addInvestors();}}> add</button>{" "}
      


      </div>
    )
}

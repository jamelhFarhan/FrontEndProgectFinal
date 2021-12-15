import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Investors({token}) {

const [Investors, setInvestors] = useState([])
const [name, setname1] = useState("");
const [email, setemail] = useState("");
const [phoneNumber, setphoneNumber] = useState("");
const [price, setprice] = useState("")


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
        } catch (error) {
          console.log("error");
        }
      };


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

    return (
        <div>
        {Investors.map((elem, i) => {
          return (
            <div  key={elem._id}>
              <p> {elem.name}</p>
              <p> {elem.email}</p>
              <p>{elem.phoneNumber}</p>
              <p>{elem.price}</p>
              <button onClick={() => { deleteInvestors(elem._id, i);}} >  delete{" "}</button> 
             
            </div>
          );
        })}
        <input onChange={(e) => { FuncName1(e); }} placeholder="name"/>{" "}
        <input onChange={(e) => { FunceMail(e); }} placeholder="email"/>{" "}
        <input onChange={(e) => { FuncPhone(e); }} placeholder="phoneNumber"/>{" "}
        <input onChange={(e) => { FuncPrice(e); }} placeholder="price"/>{" "}
        <button onClick={() => {addInvestors();}}> add</button>{" "}
      
      </div>
    )
}

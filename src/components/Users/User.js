
import React, { useState, useEffect } from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import axios from "axios";
import "./user.css"
export default function User({token }) {
const[dashborduser ,setdashborduser]=useState([]);
  useEffect(async () => {
    try {
      console.log(token);
      const dashbordadmin2 = await axios.get("http://localhost:5000/getInvestor", {
          
        headers: { authorization: "Bearer " + token },
      });
      setdashborduser(dashbordadmin2.data);
      
    } catch (error) {
      console.log(error);
    }




  }, []);
  const deleteInvestors = async (id, i) => {
    try {
      const newwww = await axios.delete(`http://localhost:5000/deletInvestors/${id}`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      const copied = [...dashborduser];
      copied.splice(i, 1);
      setdashborduser(copied);
      console.log(newwww);
    } catch (error) {
      console.log("error");
    }
  };
  
  return (
    <div className='main-div-users'>

    <table className="table">
    <tr className="th">
    <th >
    Name</th>
    <th>
    Amount</th>
    <th>
    Email</th>
    <th>
    PhoneNumber</th>
    <th>
    Delete</th>
    </tr>
    
    {
      dashborduser.map((elem, i)=>{
        return <tr>
        
        <td className="td">
        {elem.name}
        </td>
        <td className="td">
        {elem.price}
        </td>
        <td className="td">
        {elem.email}
        </td>
        <td className="td">
        {elem.phoneNumber}
        </td>
        
    <DeleteOutlineIcon id="deletinfo" onClick={(i) => { deleteInvestors(elem._id, i);}} >{" "}</DeleteOutlineIcon><br/> 
        </tr>
        
      })
      
    }
   
    </table>
    
    </div>
  )
}

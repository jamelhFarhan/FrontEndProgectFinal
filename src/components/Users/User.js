import React, { useState, useEffect } from "react";
import axios from "axios";
import "./user.css";
export default function User({ token }) {
  const [dashborduser, setdashborduser] = useState([]);

  const [priceUpdate, setpriceUpdate] = useState("");
  
  useEffect(async () => {
    try {
      console.log(token);
      const dashbordadmin2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getInvestor`,
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      setdashborduser(dashbordadmin2.data);
      setpriceUpdate(dashbordadmin2.data.priceUpdate);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteInvestors = async (id, i) => {
    try {
      const newwww = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/deletInvestors/${id}`,
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

  /////////////////

  const UpdateInvestor = async (id, i) => {
    console.log("hhh");
    try {
      const datainvestor = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/updateInvestors/${id}`,
        {
          price: priceUpdate,
        },
        {
          headers: { authorization: "Bearer " + token },
        }
      );
      console.log(datainvestor);

      const ArrCopeeid = [...dashborduser];
      ArrCopeeid[i] = datainvestor.data;
      setdashborduser(ArrCopeeid);
      console.log(datainvestor.data);

      setpriceUpdate(" ");
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////
  const UpDateprice = (e) => {
    console.log(e.target.value);
    setpriceUpdate(e.target.value);
  };

  return (
    <>
    <div className="main-div-users">
      <table className="table">
        <tr className="th">
          <th>Name</th>
          <th>Amount</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Interaction</th>
        </tr>

        {dashborduser.map((elem, i) => {
          return (
            <tr>
          
              <td id="name-user">{elem.name}</td>
              <td id="price-user" className="td">{elem.price}</td>
              <td id="email-user" className="td">{elem.email}</td>
              <td id="phone-user" className="td">{elem.phoneNumber}</td>
            
             

              
            <button id="delet-h-j" onClick={() => { deleteInvestors(elem._id, i); }}>{" "} Delete </button>
            
            <button id="butn-user-edit" onClick={() => {UpdateInvestor(elem._id, i);}}> {" "} Edet</button>
            <input  id="butn-amount" onChange={(e) => { UpDateprice(e); }} value={priceUpdate} placeholder="amount"/>
              
            </tr>
          );
        })}
      </table>
    </div>
    </>
  );
}

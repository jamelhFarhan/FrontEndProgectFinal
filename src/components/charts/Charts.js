import React, { useState ,useEffect } from "react";

import "./charts.css";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import axios from 'axios';

export default function Charts({token}) {
  const [user, setUser] = useState([]);
  useEffect(async()=>{
try {

 const datauser = await axios.get("http://localhost:5000/userdashbord",{
  headers: { authorization: "Bearer " + token },
 }) 
 setUser(datauser.data)
 console.log("dadt" ,datauser.data);

 console.log("name" ,datauser.data[0].name);
 console.log("price" ,datauser.data[0].price);

 
} catch (error) {
  
}
  },[])
   
   
 
    return (
  
      <div className='chart'>
      <h3 className='charTitle'>Users investor</h3>
      <ResponsiveContainer width="100%" aspect={3/1}>
      
       <LineChart data={user}>
       <YAxis type="number" domain={[0, 100000]} stroke='#5550bd'/>
       <XAxis dataKey="name" stroke='#5550bc'/>
      
       <Line type="monotone" dataKey="price" stroke="#5550bd" />
     

       <Tooltip />
      <CartesianGrid stroke='#e0dfdf' strokeDasharray=" 5 5"/>
       </LineChart> 
       
      </ResponsiveContainer>
          <div> 
          
          </div>
            
        </div>

      
    )
}

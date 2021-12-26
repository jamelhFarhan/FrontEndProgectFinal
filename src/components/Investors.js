// import React from 'react';
// import{
//   ResponsiveContainer,
//   AreaChart,
//   XAxis,
//   YAxis,
//   Area,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";
// import { format, parseISO , subDays } from "date-fns";

// export default function Investors(){
//   const data =[];
// for (let parc =30;parc >= 0; parc--){
//   data.push ({
//     data:subDays( new Date (),parc).toISotring().substr(0,10),

//     value: 1+ Math.random()
//   });
// }
//   return<ResponsiveContainer width={100} height={400} >
// <AreaChart data={data}>
// <difs>
// <linearGradient id='color' x1="0" y1="0" x2="0" y1="1">
// <stop  offset="0%" stopColor='#2451B7' stopOpacity={0,4}></stop>
// <stop  offset="75%" stopColor='#2451B7' stopOpacity={0,05}></stop>
// </linearGradient>
// </difs>
// <Area dataKey="value" stork="#2451B7" fill="url(#color)"/>

// <XAxis dataKey="date"  axisLine={false} tickLine={false} tickFormatter={ str=>{
//   const date = parseISO(str);
//   if(date.getDate()%7 ===0){
//     return format (date,"mm, d");
//   }
//   return"";
// }} />

// <YAxis dataKay="value" axisLine={false} tickLine={false} tickCount={8}
// tickFormatter={number =>`$${number.toFixed(2)}`}/>

// <Tooltip  content={<CustomTooltip/>}/>
// <CartesianGrid  opacity={0,1} vertical={false}/>
// </AreaChart>
//   </ResponsiveContainer>
  

// }
// function CustomTooltip({acttive, payload,label}){
// if(acttive){
//   <div><h4>{format(parseISO(label),"eeee,mmm,yyyy")}</h4>
//   <p>{payload[0].value.toFixed(2)}</p>
//   </div>
// }
// return null;
// }
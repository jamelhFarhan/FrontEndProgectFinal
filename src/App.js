import React,{useState,useEffect} from 'react'
import axios from 'axios';
function App() {

  const [imgurl, setImgurl] = useState("")

useEffect=(()=>{
 callfunc(); 
 } ,[])


const callfunc=()=>{
 axios.git("https://api.thecatapi.com/v1/images/search")
 .then((respons)=>{
     setImgurl(respons.data[0].url)
   }) .catch((error)=> {
console.log(error);
   })
  
  return (
    <div>
      
    </div>
)}}


export default App


import React from 'react'
import { useHistory } from "react-router-dom";
import "../style/Sectors.css"
export default function SECTORS() {

    const history = useHistory();
    const  Energy= () => {
      history.push("/Energe");
    };
    const Healthy= () => {
        history.push("/Media");

    };
    const Manu= () => {
        history.push("/Manufacturing");

    };
    const Digital =()=>{
        history.push("/DigitalTechnology")
    }

    return (
        <div id='mandiv' >
        <div id='mainimg'>
     
        
 <img  id='one' src='https://www.neom.com/content/dam/neom/mvp/technology-and-digital/c49-%E2%80%93-leading-the-world/04.jpg' height={350} width={500} />
 <img id='tow' src='https://neom.scene7.com/is/image/neomstage/Gallery%205?scl=1' height={350} width={500} />
  <img id='thre' src='https://neom.scene7.com/is/image/neomstage/Gallery%2002?scl=1' height={350} width={500} />
  <img id='for' src='https://neom.scene7.com/is/image/neom/02?scl=1' height={350} width={500}/>
<div> 
<div> <button  onClick={() => { Manu()}} > Manufacturing</button></div><br/>
<button  onClick={() => { Healthy()}} > Media</button><br/>
<button  onClick={() => { Energy()}} > Energy</button><br/>
<button  onClick={() => { Digital()}} > Digital</button><br/>
</div>

<div>


  </div>

        </div>
        </div>
    )
}

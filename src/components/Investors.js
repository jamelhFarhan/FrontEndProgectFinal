import React from 'react'
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Home from  "./Home/Home";
export default function Investors({token}) {
    return (
        <div >
        <Topbar/>
        <div className='container'>
        <Sidebar token={token} />
        <Home token={token}/>
        </div>
        </div>
    )
}

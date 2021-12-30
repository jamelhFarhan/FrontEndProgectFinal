import React from 'react'
import Featuredinfo from '../feature/Featuredinfo'
import Charts from "../charts/Charts"

import "./home.css"
export default function Home({token}) {
    return (
        <div className='home'>
            
            <Featuredinfo/>
           <Charts token={token}/>
            <div className='homeWidgets'></div>
           
        </div>
    )
}
import React from 'react'
  import "./featuredinfo.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
export default function Featuredinfo() {
    return (
         <div className='featured'>
         <div className='featuredItem'>
         <span className='featuredTitle'>Revanue</span>
         <div className='featuredMonyContainer'>
         <span className='featuredMony'>$2,416</span>
         <span className='featuredMonyRate'>-11,4 <ArrowDownwardIcon className='featurdIcon negative'/></span>
         </div>
<span className='featuredSub'>Comper to last month</span>


         </div>
       




         <div className='featuredItem'>
         <span className='featuredTitle'>Sales</span>
         <div className='featuredMonyContainer'>
         <span className='featuredMony'>$4,416</span>
         <span className='featuredMony'>-1,4 <ArrowDownwardIcon className='featurdIcon-negative'/></span>
         </div>
<span className='featuredSub'>Comper to last month</span>


         </div>









         <div className='featuredItem'>
         <span className='featuredTitle'>Coust</span>
         <div className='featuredMonyContainer'>
         <span className='featuredMony'>$2,416 </span>
         <span className='featuredMony'>+11,4 <ArrowUpwardIcon className='featurdIcon ' /></span>
         </div>
<span className='featuredSub'>Comper to last month</span>


         </div>

         
         
         </div>
    );
}

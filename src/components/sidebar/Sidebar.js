import React from 'react'
import { useHistory } from "react-router-dom";
import "./sidebar.css"
import LineStyleIcon from '@material-ui/icons/LineStyle';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ReportIcon from '@material-ui/icons/Report';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MemoryIcon from '@material-ui/icons/Memory';
export default function Sidebar({token}) {

    const history = useHistory();
    const  cntroluser= () => {
      history.push("/User");
    }
    return (
        <div className='Sidebar'>
        <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
         <h3 className='sidebarTitle'>Dashbord</h3>
         <ul className='sidebarList'>
         <li className='sidebarListItme active'>
         <LineStyleIcon className='sidebarIcon'/>
         Home
         </li>
         <li className='sidebarListItme'>
         <EqualizerIcon className='sidebarIcon'/>
         state
         </li>
         <li className='sidebarListItme'>
         <AttachMoneyIcon />
         amount
         </li>
         
         </ul>

        </div>
        <div className='sidebarMenu'>
        <h3 className='sidebarTitle'>Quick Menu</h3>
        <ul className='sidebarList'>
        <li className='sidebarListItme'>
        <PermIdentityIcon onClick={()=>{cntroluser()}}  token={token} >users</PermIdentityIcon>
        
        
        users
        </li>
        <li className='sidebarListItme'>
        <MemoryIcon/>
        feedback
        </li>
        <li className='sidebarListItme'>
        <ReportIcon/>
        Reports
        </li>
        
        </ul>

       </div>

       <div className='sidebarMenu'>
       <h3 className='sidebarTitle'>notifications</h3>
       <ul className='sidebarList'>
       <li className='sidebarListItme'>
       <ChatBubbleOutlineIcon/>
       messages
       </li>
       <li className='sidebarListItme'>
       <MailOutlineIcon/>
       mail
       </li>
     
       
       </ul>

      </div>

      

        </div>
        </div>
    )
}


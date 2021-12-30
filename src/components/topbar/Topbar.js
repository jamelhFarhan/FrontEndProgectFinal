import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import "./topbar.css";
export default function Topbar() {
    return (
         <div className='topbar'>
    <div className='topbarWrapper'>
         <div className='topLeft'>
         <span className='logo'> Admin</span>
         </div>
         <div className='topRight'>
        <div className='topbarIconContainer'>
        <NotificationsNoneIcon/>
        <span className='topIconBadgr'>3</span>
        </div>
       
       
        <div className='topbarIconContainer'>
        <LanguageIcon/>
        <span className='topIconBadgr'>3</span>
       </div>



        <div className='topbarIconContainer'>
        <SettingsIcon/>
    
        </div>
         <img src='https://i.pinimg.com/564x/21/3f/4b/213f4b68c94d525adf6ba158080aad2c.jpg' className='topAvatar'/>
         </div>
        
         </div>
            

        </div>
     )
}


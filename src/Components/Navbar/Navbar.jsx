import React from 'react'
import './Navbar.css'
import menuicon from '../../assets/menu.png'

import searchicon from '../../assets/search.png'
import uploadicon from '../../assets/upload.png'
import moreicon from '../../assets/more.png'
import notificationicon from '../../assets/notification.png'
import profileicon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

function Navbar({setSideBar}) {
    return (


        <nav className='flex-div'>
    
        <div className="nav-left flex-div">
            <img className='menu-icon' onClick={()=>setSideBar(prev=>prev===false?true:false)} src={menuicon} alt="" />
         <Link to={'/'} ><img className='logo' src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-0.png' alt="" /></Link>
        </div>

        <div className='nav-middle flex-div'>  
        <div className="search-box flex-div">
        <input type="text" placeholder='Search' />
            <img src={searchicon} alt="" />
        </div>        
        </div>

        <div className=" nav-right flex-div">
         <img src={uploadicon} alt="" />
         <img src={moreicon} alt="" />
         <img src={notificationicon}  alt="" />
         <img src={profileicon} className='user-icon' alt="" />
        </div>

        </nav>
    )
}

export default Navbar
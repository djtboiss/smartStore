import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import "./Sidebar.css";
import Pdropdown from '../Pdropdown/Pdropdown';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const role="admin";

  const SideData=SidebarData.filter((data)=>{
    if(role==="admin")
       return data
    return data.allowed==="public" || data.allowed===role ;
  });

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '' }}>
        <div className='  position-relative justify-content-end align-items-center d-flex  bg-white' style={{width:'100%', background: 'gray', height: '60px',overflow: 'hidden' }} >
           <div className=' m-3 '>
             
           </div>
           <div className=' m-3 '>
             <Pdropdown  />
           </div>

          <Link to='#' className='menu-bars m-5 d-lg-none bg-dark' style={{overflow: 'hidden'}} >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>


           
          
        </div>

        


        <div className='nav-menu active bg-dark d-none d-lg-flex'>
        <ul className='nav-menu-items bg-dark order-lg-first'  >
            <li className='navbar-toggle bg-dark '>
          { sidebar}
          </li>
          {
            
            SideData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })
            
            }
            </ul>
         </div>
        <nav className={sidebar ? 'nav-menu active bg-dark ' : 'nav-menu bg-dark '}>
          <ul className='nav-menu-items bg-dark order-lg-first'  onClick={showSidebar}>
            <li className='navbar-toggle bg-dark '>
              <Link to='#' className='menu-bars d-lg-none'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {
            
            SideData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                
              );
            })
            
            }
          </ul>
        </nav>
         
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
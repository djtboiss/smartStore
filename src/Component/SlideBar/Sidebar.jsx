import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import "./Sidebar.css";

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
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className=' justify-content-start align-items-center d-none d-lg-flex bg-dark' style={{background: 'gray', height: '60px',overflow: 'hidden' }} >
          <Link to='#' className='menu-bars m-5 ' style={{overflow: 'hidden'}} >
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          
        </div>
        <nav className={sidebar ? 'nav-menu active bg-dark d-none d-lg-block' : 'nav-menu bg-dark d-block'}>
          <ul className='nav-menu-items bg-dark order-lg-first'  onClick={showSidebar}>
            <li className='navbar-toggle bg-dark '>
              <Link to='#' className='menu-bars '>
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
         <div className={sidebar ? 'd-flex bg-dark d-lg-none' : 'd-flex bg-dark d-block d-lg-none'} style={{textDecoration: ' none '}}>
            {SideData.map((item, index) => {
              return (
                <li key={index} className="cName">
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
           
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
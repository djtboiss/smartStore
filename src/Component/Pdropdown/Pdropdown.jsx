import React,{useState,useEffect} from 'react';
import {Dropdown,DropdownItem,DropdownToggle,DropdownMenu} from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {auth} from "../../Firebase/Firebase";
import Dialogue from '../Dialogbox/Dialog';
import "./Pdropdown.css";


function Pdropdown() {

  const [user, setuser] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setuser(auth.currentUser);
  }, [])
  const [isClick, setisClick] = useState(false);
  function setClick(){
    setisClick(!isClick)
  }


  return (
    <>
        <Dropdown 
        isOpen={isClick}
        toggle={setClick}
        >
            <DropdownToggle >
            <FaIcons.FaUserCircle  size={20}  />
            </DropdownToggle>
            <DropdownMenu container="body">
            <DropdownItem header>
               {
                user?user.email:null
                }
            </DropdownItem>
            
              <DropdownItem>
              <Link className='decoration' to="/profile" >
                    View Profile
               </Link>
              </DropdownItem>

              <DropdownItem onClick={()=>setIsOpen(!isOpen)}>
                    Logout
              </DropdownItem>

              {/* <DropdownItem onClick={function noRefCheck(){}}>
              <Dialogue/>
              </DropdownItem> */}
              
              
            </DropdownMenu>
          </Dropdown>

         {
          isOpen? <Dialogue/>:null

         }
    </>
  )
}

export default Pdropdown
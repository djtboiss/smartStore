import React,{useState,useEffect} from 'react';
import Navbar from '../../Component/SlideBar/Sidebar';
import "./userProfile.css";
import adminPic from '../../Images/admin.png'
import { List } from 'reactstrap';
import {auth} from "../../Firebase/Firebase";

function UserProfile() {



    const [user, setuser] = useState(null)
    useEffect(() => {
      setuser(auth.currentUser);
    }, [])
    

  return (
    <>
    <Navbar />
    <div className='profile_bar'>
    <img className='profileImage' src={adminPic} alt="profile_image"/>
    </div>

    <div>
        <h1 className='head-tag'>WELCOME { user?user.email:null }
        </h1>
    </div>

    <div className='role-container'>
            <h3 className='role-tag'>ROLE</h3>
            <List>
            <ul className=''>
                <li>role</li>
                <li>role</li>
                <li>role</li>
            </ul>
            </List>
    </div>
   
    </>
    
  )
}

export default UserProfile
import React from 'react';
import Navbar from '../../Component/SlideBar/Sidebar';
import "./userProfile.css";
import adminPic from '../../Images/admin.png'

function UserProfile() {
  return (
    <>
    <Navbar />
    <div className='profile_bar'>
    <img className='profileImage' src={adminPic} alt="profile_image"/>
    </div>

    <div className='content-block'>
        <h1>WELCOME ADMIN</h1>
        <div>
            <h3>ROLE</h3>
        </div>
    </div>
   
    </>
    
  )
}

export default UserProfile
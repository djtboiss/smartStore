import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import {useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";

const ProtectedRoute=({children})=> {

//     const [user, setuser] = useState(null)
  
//   useEffect(() => {
//    setuser(sessionStorage.getItem('Auth Token'))
//   }, [])

   let user=auth.currentUser;
  
    if(!user)
     return <Navigate to="/"/>
    return children; 
};

export default ProtectedRoute
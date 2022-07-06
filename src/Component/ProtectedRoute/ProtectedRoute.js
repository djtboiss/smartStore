import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';

const ProtectedRoute=({children})=> {
    let user=auth.currentUser;
    if(user==null)
     return <Navigate to="/"/>
    return children; 
};

export default ProtectedRoute
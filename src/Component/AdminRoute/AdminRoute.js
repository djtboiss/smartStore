import React from 'react';
import { Navigate } from 'react-router-dom';

const RoleRoute=({children})=> {
    var role="manager"
    var req="manager"
    var add="/"+req
    if(role===req){
        console.log("hiii",add);
    }
    return <Navigate to="/home"/>

};

export default RoleRoute;
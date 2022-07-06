import React from 'react';
import Homescreen from './Pages/Homescreen/Homescreen';
import LoginPage from './Pages/Login/LoginPage';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import PublicRoute from './Component/PublicRoute/PublicRoute';
import Admin from './Component/Admin/Admin';
import Manager from './Component/Manager/Manager';
import CreateUser from './Pages/CreateUser/CreateUser';

export default function App() {

  return (
    <>
    <Routes>
        <Route path="home" element={<ProtectedRoute><Homescreen/></ProtectedRoute>}/>
        <Route path="admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
        <Route path="manager" element={<ProtectedRoute><Manager/></ProtectedRoute>} />
        <Route path="all" element={<ProtectedRoute><PublicRoute/></ProtectedRoute>} />
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/create" element={<CreateUser/> } />
        
    </Routes>
    
    </>
    
  )
}

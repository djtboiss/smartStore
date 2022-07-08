import React from 'react';
import Homescreen from './Pages/Homescreen/Homescreen';
import LoginPage from './Pages/Login/LoginPage';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import CreateUser from './Pages/CreateUser/CreateUser';
import Customer from './Pages/Customer/Customer';
import HistoryCustomer from './Pages/HistoryCustomer/HistoryCustomer';
export default function App() {

  return (
    <>
    <Routes>
        <Route path="home" element={<ProtectedRoute><Homescreen/></ProtectedRoute>}/>
        <Route path="customer" element={<ProtectedRoute><Customer /></ProtectedRoute>}/>
        <Route path="history" element={<ProtectedRoute><HistoryCustomer/></ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><CreateUser/> </ProtectedRoute>} />
        <Route path="/" element={ <LoginPage/> } />
        
    </Routes>
    
    </>
    
  )
}

import React,{useState} from 'react';
import "./LoginPage.css";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../Firebase/Firebase';
import { useNavigate } from "react-router-dom";
import {Button,Input} from 'reactstrap';
import { Link } from "react-router-dom";


function LoginPage() {
  let navigate = useNavigate();

    const [user,setUser]=useState({});
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });

  }
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    
    function handlePass(event) {
        setPassword(event.target.value)
    }

  return (
    <div className='container'>
      <div>
        <h1 className='head'>WELCOME TO SMART STORE</h1>
      </div>

      <div>
      <Input 
        className='form-floating mb-2'
        value={email}
        placeholder="EMAIL"
        label="Email"
        onChange={handleEmail}
        type="email"
        name="email"
        required/>
      </div>
      
      <div>
      <Input 
        className='form-floating mb-2'
        value={password}
        placeholder="PASSWORD"
        label="PASSWORD"
        type="password"
        onChange={handlePass}
        name="password"
        required/>

      </div>
        
      <div>
      <Button className='bg-primary' type="button"  onClick={login}> Login </Button>
      </div>
      
      <Link to="/create" className='mb-2'>join uss</Link>
    </div>
  )
}

export default LoginPage;
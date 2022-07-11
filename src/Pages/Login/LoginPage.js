import React,{useState,useEffect} from 'react';
import "./LoginPage.css";
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../Firebase/Firebase';
import { useNavigate } from "react-router-dom";
import {Button,Input} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage(){

  let navigate = useNavigate();

  // useEffect(() => {

  //   let authToken = sessionStorage.getItem('Auth Token');
  //   if (authToken) {
  //     navigate('/home')
  // }

  // if (!authToken) {
  //     navigate('/')
  // }  
  // }, [])
  

    const [user,setUser]=useState({});

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const success = () => toast("LOGIN SUCCESSFULLY!",{
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "success"
      });
    const errrr = (msg) => toast(msg,{
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "error"
      });

    
  const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        setUser(userCredential.user);
        success();
        setTimeout(()=>{
          navigate("/home");
        },[500]);
      })
      .catch((error) => {
        errrr(error.message)
        console.log("error");
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
      <ToastContainer position="bottom-right" newestOnTop />
    </div>
  )
}

export default LoginPage;
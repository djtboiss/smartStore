import React,{useState,useRef} from 'react';
import {Button,Input} from 'reactstrap';
import "./CreateUser.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase";
import Navbar from '../../Component/SlideBar/Sidebar';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateUser() {

    const user_role="Admin";
    const v_created = () => toast("ADDED TO DATABASE!",{
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "info"
        });
    const v_email = () => toast("MAIL SENT!",{
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

    const form = useRef();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const [name,setName]=useState("");
    const [user, setuser] = useState({});


    function clear_feild(){
        setEmail("");
        setPassword("");
        setRole("");
        setName("");

    }

    function handleSelect(event){
        event.preventDefault();
        console.log(event.target.value);
        setRole(event.target.value);
    }
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_w3r23ks","template_0v0390i", form.current, 'lyOkSH4_blILz6FZl')
          .then((result) => {
              v_email();
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    const register=async(e)=> {
        
        e.preventDefault();
        try{
            const user_returned=await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            v_created();
            sendEmail(e); 
        }catch(error){
            var msg=error.message;
            errrr(msg.slice(0,msg.indexOf('(')));
        }

        clear_feild();

    };


    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleName(event) {
        setName(event.target.value)
    }
    
    function handlePass(event) {
        setPassword(event.target.value)
    }


  return (
    <div>
    <Navbar />
    <div  className='create_container'>
    <form ref={form} onSubmit={register}>
             <div> 
             <Input  
             className='form-floating mb-2' 
             value={name} 
             placeholder="NAME" 
             label="Name" 
             onChange={handleName} 
             type="text" 
             name="user_name" 
             required/> 
             </div> 

            <div> 
             <Input  
             className='form-floating mb-2' 
             value={email} 
             placeholder="EMAIL" 
             label="Email" 
             onChange={handleEmail} 
             type="email" 
             name="user_email" 
             required/> 

            </div> 
            
            
            <div> 
            <Input  
            className='form-floating mb-2' 
            value={password} 
            placeholder="PASSWORD" 
            label="Password" 
            onChange={handlePass} 
            type="password" 
            name="password" 
            required/> 
            </div> 
            
            <div> 
            <Input  type="select" value={role}  className='mb-2' onChange={handleSelect} required> 
            <option></option> 
            <option disabled={user_role==="Manager"}>MANAGER</option> 
            <option disabled={user_role==="Admin"}>GROUND</option> 
            </Input> 
            </div> 
            <div> 
            <Button className='bg-primary' type="submit" > CREATE </Button> 
            </div> 
            <ToastContainer position="bottom-right" newestOnTop />
    </form>
    </div>
    </div>
  )
}

export default CreateUser;
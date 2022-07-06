import React,{useState} from 'react';
import {Button,Input} from 'reactstrap';
import "./CreateUser.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import Navbar from '../../Component/SlideBar/Sidebar';


function CreateUser() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("");
    const [user, setuser] = useState({});

    function handleSelect(event){
        event.preventDefault();
        setRole(event.target.value);
    }
    
    let navigate = useNavigate();

    const register=async()=> {
        try{
            const user_returned=await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setuser(user_returned);
            // console.log(user.uid);
            // navigate("/");
            
        }catch(error){
            console.log(error);
        }
    };

    function handleEmail(event) {
        setEmail(event.target.value)
    }
    
    function handlePass(event) {
        setPassword(event.target.value)
    }


  return (
    <div>
    <Navbar />
    <div  className='create_container'>
        
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
        label="Password"
        onChange={handlePass}
        type="password"
        name="password"
        required/>
        </div>

        <div>
        
        <Input type="select" className='mb-2' onChange={handleSelect}>
            <option>SELECT</option>
            <option>ADMIN</option>
            <option>MANAGER</option>
            <option>GROUND</option>
        </Input>

        </div>

        <div>
            <Button className='bg-primary' type="button"  onClick={register}> CREATE </Button>
        </div>

        
    </div>
    </div>
  )
}

export default CreateUser;
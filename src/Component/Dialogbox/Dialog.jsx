import React from 'react'
import Modal from 'react-modal';
import {Button} from "reactstrap";
import {auth} from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'10px',
      
    },
  };


function Dialogue({user_data}) {
    let navigate = useNavigate();

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    function handleYes(){
        auth.signOut();
        sessionStorage.removeItem('Auth Token');
        navigate('/')
    }
  
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Logout"
        >
          <h2 >ARE YOU SURE? </h2>
       
          <Button className='m-2' onClick={handleYes}>YES</Button>
          <Button className='m-2' onClick={()=> setIsOpen(false) }>NO</Button>
          
        </Modal>
      </div>
    );
  }
  
  
  export default Dialogue;
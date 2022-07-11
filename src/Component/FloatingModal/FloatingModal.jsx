import React from 'react';
import ReactDOM from 'react-dom';
import "./FloatingModal.css";
import Modal from 'react-modal';
import { Table } from 'reactstrap';
import {Button} from "reactstrap";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    // right: 'auto',
    // bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'10px',
    
  },
};

//Modal.setAppElement('#yourAppElement');


function FloatingModal({user_data}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal}>View Cart</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        //className="FloatingModel"
        // className="Modal"
        //    overlayClassName="Overlay"
      >
        <h2 className='cart_head'>CART ITEMS</h2>
        {/* <button onClick={closeModal}>close</button> */}
        <Table size='sm' hover responsive>
        <thead>
          <tr>
            <th>PRODUCT ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            user_data.map( (user)=><>

          <tr>
            <th scope="row">{user.product_id}</th>
            <td>{user.product_name}</td>
            <td>{user.product_quantity}</td>
            <td>{user.product_quantity*user.product_price}</td>
            <td>ACTION</td>
          </tr>

            </> )
          }
 
        </tbody>
      </Table>


        
      </Modal>
    </div>
  );
}


export default FloatingModal;
import React from 'react';
import "./Customer.css";
import {Table, Badge  } from 'reactstrap';
import Navbar from '../../Component/SlideBar/Sidebar';
import FloatingModal from '../../Component/FloatingModal/FloatingModal';



function Customer() {
  


  const User_Data = [
    {
      id:1,
      name: 'Rishabh',
      cart: 4,
      sum: 500,
      cartItem:[{
        product_id:12,
        product_name:"oreo",
        product_quantity:4,
        product_price:18
      },{
        product_id:123,
        product_name:"oreo_double",
        product_quantity:4,
        product_price:28
      }]
    },
    {
      id:2,
      name: 'Tintin',
      cart: 4,
      sum: 500,
      cartItem:[{
        product_id:12,
        product_name:"oreo",
        product_quantity:4,
        product_price:18
      },{
        product_id:123,
        product_name:"oreo_double",
        product_quantity:4,
        product_price:28
      }]
    },
    {
      id:3,
      name: 'Vishu',
      cart: 4,
      sum: 500,
      cartItem:[{
        product_id:12,
        product_name:"oreo",
        product_quantity:4,
        product_price:18
      },{
        product_id:123,
        product_name:"oreo_double",
        product_quantity:4,
        product_price:28
      }]
    },
    {
      id:4,
      name: 'shubh',
      cart: 4,
      sum: 500,
      cartItem:[{
        product_id:12,
        product_name:"oreo",
        product_quantity:4,
        product_price:18
      },{
        product_id:123,
        product_name:"oreo_double",
        product_quantity:4,
        product_price:28
      }]
    }
  ]
  
  return (
    <>
      <Navbar />
 
      <div className='table'>
        <div className='badge-container gap-4'>
          <div><Badge className='m-0'>CURRENT USER : {User_Data.length}</Badge></div>
          <div><Badge className='m-0'>CURRENT SUM : 500</Badge></div>
        </div>

      <Table size='sm' hover responsive>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Cart</th>
            <th>Sum</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
            {

              User_Data.map( (user)=> <>
               <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.cart}</td>
                  <td>{user.sum}</td>
                  <td><FloatingModal user_data={user.cartItem}/></td>
                  </tr>
              
              </> )
            }
   
          
        </tbody>
      </Table>

      </div>

    </>
    

  )
}

export default Customer
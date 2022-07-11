import React,{useState} from 'react';
import Navbar from '../../Component/SlideBar/Sidebar';
import { Table } from 'reactstrap';
import {Button} from "reactstrap";
import { Badge } from 'reactstrap';
import DatePicker from 'react-date-picker';
import FloatingModal from '../../Component/FloatingModal/FloatingModal';


import "./HistoryCustomer.css"
function HistoryCustomer() {

  const User_Data = [
    {
      id:1,
      name: 'Rishabh',
      inTime:'1:30',
      outTime:'2:30',
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
      inTime:'1:30',
      outTime:'2:30',
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
      inTime:'1:30',
      outTime:'2:30',
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
      inTime:'1:30',
      outTime:'2:30',
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


  const [value, onChange] = useState(new Date());

  function deleteHandler(id){
    User_Data= User_Data.filter( (user)=> user.id!==id )
  }


  return (
    <>
    <Navbar />
    <div className='table'>
    <div className='badge-container2'>
          <div><Badge className='m-0'>TOTAL VISIT : 5</Badge></div>
          <div>
          <DatePicker onChange={onChange} value={value} />
          </div>
    </div>

      <Table size='sm' hover responsive>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Entry Time</th>
            <th>Exit Time</th>
            <th>Cart</th>
            <th>View</th>        
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {
          User_Data.map( (user)=>
          <>
           <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.inTime}</td>
            <td>{user.outTime}</td>
            <td>{user.cart}</td>
            <td> <FloatingModal user_data={user.cartItem}/> </td>
            <td> <Button className='bg-dark' onClick={()=>deleteHandler(user.id)} >Delete</Button> </td>
          </tr>
          </>)
         }
        </tbody>
      </Table>

      </div>


    </>
  )
}

export default HistoryCustomer
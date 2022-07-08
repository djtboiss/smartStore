import React from 'react';
import "./Customer.css";
import { Table } from 'reactstrap';
import {Button} from "reactstrap";
import Navbar from '../../Component/SlideBar/Sidebar';
import { Badge } from 'reactstrap';
function Customer() {




  return (
    <>
      <Navbar />
      <div className='table'>

        <div className='badge-container gap-4'>
          <div><Badge className='m-0'>CURRENT USER : 5</Badge></div>
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
          <tr>
            <th scope="row">1</th>
            <td>RISHABH SUYAL</td>
            <td>4</td>
            <td>45000</td>
            <td> <Button>REMOVE</Button> </td>
          </tr>
          
        </tbody>
      </Table>

      </div>

    </>
    

  )
}

export default Customer
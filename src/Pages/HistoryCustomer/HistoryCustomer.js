import React,{useState} from 'react';
import Navbar from '../../Component/SlideBar/Sidebar';
import { Table } from 'reactstrap';
import {Button} from "reactstrap";
import { Badge } from 'reactstrap';
import DatePicker from 'react-date-picker';


import "./HistoryCustomer.css"
function HistoryCustomer() {
  const [value, onChange] = useState(new Date());
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
            <th>Sum</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>RISHABH SUYAL</td>
            <td>1:30</td>
            <td>3:00</td>
            <td>45000</td>
            <td> <Button className='bg-dark'>Delete</Button> </td>
          </tr>
          
        </tbody>
      </Table>

      </div>


    </>
  )
}

export default HistoryCustomer
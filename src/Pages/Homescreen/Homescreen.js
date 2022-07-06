import React from 'react';
import { PieChart } from '../../Component/Charts/PieChart/PieChart';
import "./Homescreen.css";
import { auth } from '../../Firebase/Firebase';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import Navbar from '../../Component/SlideBar/Sidebar';

function Homescreen() {
  let navigate = useNavigate();
 const user=auth.currentUser;
  return (
    <div>
      <Navbar />
        <h1>DASHBOARD</h1>
        <h1>
          {
          user.email
          }
        </h1>

        <div className='PieChart'> 
        <PieChart className="pieChart"/>
        <ListGroup>
          
        <ListGroupItem tag="a"><Link to="/admin">admin</Link></ListGroupItem>
        <ListGroupItem tag="a"><Link to="/manager">MANAGER</Link></ListGroupItem>
        <ListGroupItem tag="a"><Link to="/all">PUBLIC</Link></ListGroupItem>
       
       </ListGroup>

        {/* <List>
          <Link to="admin">ADMIN</Link>
          <Link to="manager">MANAGER</Link>
          <Link to="all">PUBLIC</Link>
        </List> */}

        
        

        </div>
        

    </div>

  )
}

export default Homescreen
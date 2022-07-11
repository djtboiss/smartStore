import React from 'react';
import { PieChart } from '../../Component/Charts/PieChart/PieChart';
import { StackChart } from '../../Component/Charts/StackChart/StackChart';
import "./Homescreen.css";
import Navbar from '../../Component/SlideBar/Sidebar';
import Jumbotron from '../../Component/Jumbotron/Jumbotron';


function Homescreen() {
  return (
    <div>
        
        <Navbar />
        <Jumbotron/>
        <div className='container-fluid m-0 mt-4 gap-4' >
            <div className='row ' >  
            <div className='d-none d-lg-flex col-lg-3 '> 
               
              </div>

              <div className='col col-lg-3 mb-3'> 
                <PieChart/>
              </div>
              

              <div className='col col-lg-5 align-self-stretch ' style={{height: '100vh'}} > 
                <StackChart/>
              </div>

            </div>
          </div>
        </div>

  

  )
}

export default Homescreen
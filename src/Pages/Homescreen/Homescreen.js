import React from 'react';
import { PieChart } from '../../Component/Charts/PieChart/PieChart';
import { StackChart } from '../../Component/Charts/StackChart/StackChart';
import "./Homescreen.css";
import Navbar from '../../Component/SlideBar/Sidebar';

function Homescreen() {
  return (
    <div>
        <Navbar />
        <div className='d-grid Piechart'>

        <div className='pieChart'> 
           <PieChart/>
        </div>

        <div className='stackChart'> 
          <StackChart/>
        </div>

        </div>
        

    </div>

  )
}

export default Homescreen
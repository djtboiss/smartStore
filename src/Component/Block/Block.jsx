import React from 'react';
import "./Block.css";
import email from "../../Images/email.png";
function Block() {
  return (
    <div className='Block-container'>
        <div>
           <img className='dash-img' src={email} />
        </div>

        <div className='Block2-container'>
            <div><h1 className='block2-head'>Online</h1></div>
            <div><p className='block2-para'>2001</p></div>
        </div>
    </div>
  )
}

export default Block
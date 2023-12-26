import React from 'react';
import './OTPpage.css';

const OTPpage = () => {
  return (
    <div className='signin-container'>
      <div className='signinimg-container'>
        <div className='signinimg'></div>
        <p className='signin-text'>Connecting homecooks with food-lover everywhere</p> 
        </div>
        <div className='signinbox-content'>
          <div className='app-logo'></div>
          <p id="kitchen-captionlogo">KITCHEN</p>
          <form id='phone-form'>
          <input
            type='tel' 
            id="phoneNumber"
            name="phoneNumber"
            placeholder="e.g., 1234567890"
            required
          />
          </form>
          <button className='signin-btn1'>Send OTP</button>
          
          
        </div>
    </div>
    
  )
}

export default OTPpage
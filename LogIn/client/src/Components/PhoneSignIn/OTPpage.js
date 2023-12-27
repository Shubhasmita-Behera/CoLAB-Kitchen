import React from 'react';
import './OTPpage.css';
import { Link } from 'react-router-dom';

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
            <label id="phoneNumber-label">Enter MobileNo.</label>
          <input
            type='tel' 
            name="phoneNumber"
            placeholder="e.g., 9999999999"
            required
          />
          </form>
          <button className='signin-btn1'>
          <Link to='/receiveOTP'>Send OTP</Link>
          </button>
          
          
        </div>
    </div>
    
  )
}

export default OTPpage
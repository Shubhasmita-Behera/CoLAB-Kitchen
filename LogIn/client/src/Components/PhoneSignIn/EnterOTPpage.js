import React from 'react';
import './OTPpage.css';

const EnterOTPpage = () => {
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
            <label id="phoneNumber-label">Enter OTP</label>
          <input
            type='OTP' 
            name="phoneNumber"
            placeholder="XXXXX"
            required
          />
          </form>
          <button className='signin-btn1'>Submit</button>
          
          
        </div>
    </div>
    
  )
}

export default EnterOTPpage
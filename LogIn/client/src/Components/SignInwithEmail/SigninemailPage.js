import React from 'react';
import './signinemail.css';

const SigninemailPage = () => {
  return (
    <div className='signin-container'>
      <div className='signinimg-container'>
        <div className='signinimg'></div>
        <p className='signin-text'>Connecting homecooks with food-lover everywhere</p> 
        </div>
        <div className='signinbox-content'>
          <div className='app-logo'></div>
          <p id="kitchen-captionlogo">KITCHEN</p>
          <form className='email-password-form'>
            <label className="email-password-label">Enter your Email</label>
          <input
            type='email' 
            name="Email"
            placeholder="Xyz@gmail.com"
            required
          />
          </form>
          <form className='email-password-form' >
            <label className="email-password-label"> Enter Password</label>
          <input
            type='password' 
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

export default SigninemailPage
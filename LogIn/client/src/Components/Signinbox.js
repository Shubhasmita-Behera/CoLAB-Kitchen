import React from 'react';
import './signinbutton.css';

const Signinbox = () => {
  return (
    <div className='signin-container'>
      <div className='signinimg-container'>
        <div className='signinimg'></div>
        <p className='signin-text'>Connecting homecooks with food-lover everywhere</p> 
        </div>
        <div className='signinbox-content'>
          <div className='app-logo'></div>
          <p id="kitchen-captionlogo">KITCHEN</p>
          <button className='signin-btn'>Sign In with Email</button>
          <button className='signin-btn1'>
            Sign In with Phone </button>
          <button className='signin-btn1'>Sign In with Google</button>
          <a href='https://kitchenhamara.com/'>
            <p id='signup-text'>Don't have an account? Sign Up</p>
            </a>
          
        </div>
    </div>
    
  )
}

export default Signinbox
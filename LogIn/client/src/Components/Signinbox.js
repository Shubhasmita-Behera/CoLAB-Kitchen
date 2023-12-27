import React from 'react';
import './signinbutton.css';
import SigninemailPage from './SignInwithEmail/SigninemailPage'
import {Link} from 'react-router-dom';
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
          <button className='signin-btn'>
            <Link to='/signinwithemail'>Sign In with Email</Link>
          </button>
          <button className='signin-btn1'>
          <Link to='/signinwithphone'>Sign In with Phone</Link> </button>
          <button className='signin-btn1'>Sign In with Google</button>
          <a href='https://kitchenhamara.com/'>
            <p id='signup-text'>Don't have an account? Sign Up</p>
            </a>
          
        </div>
    </div>
    
  )
}

export default Signinbox

import React, { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LoginForm from '../../Components/SignInForm/LoginForm';
import SignInPhone from '../../Components/PhoneNumber/SignInPhone/SignInPhone';

const SignIn = () =>{
  const [displayComponent, setDisplayComponent] = useState('');
  const  handleButtonClick = (event) =>{
    switch(event){
     
      case 'google':
        // Handle Google Sign In here
        break;
      case 'phone':
        setDisplayComponent('phone');
        break;
      case 'signup':
        setDisplayComponent('signup');
         break;
      case 'signinemail':
        setDisplayComponent('signinemail') ;
        break; 
      default:
        break;
    }
  };
  return(
    <div>
    {displayComponent === '' && <LoginForm onButtonClick={handleButtonClick} />}
    {displayComponent === 'signup' && <SignUpForm onButtonClick={handleButtonClick} />}
    {displayComponent === 'phone' && <SignInPhone onButtonClick={handleButtonClick} />}
    {displayComponent === 'signinemail'&& <LoginForm onButtonClick={handleButtonClick}/>}
  </div>
  )
    }
  


export default SignIn;

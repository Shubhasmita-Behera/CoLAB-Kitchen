import React, { useState } from 'react';
import './LoginForm.css';
import { LockOutlined, MailOutlined, GoogleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase' ;
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginForm = ({onButtonClick}) => {
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const handleSubmit = async(e) => {
   
    try{
         const user = await signInWithEmailAndPassword(auth,email,password);
        //  console.log("User Signed in successfully",user)
    } catch(error){
      console.log("Error in Signin",error);
    }
    
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign In</h1>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
            type: 'email',
            
            
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />}
         placeholder="Email" 
         value={email}
         onChange={(e)=>(setEmail(e.target.value))} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Sign in
        </Button>
      </Form.Item>

      <Form.Item>
        <Button
          type="default"
          icon={<GoogleOutlined />}
          className="login-form-google-button"
          onClick={() => onButtonClick('google')}
        >
          Sign in with Google
        </Button>
      </Form.Item>
        <Form.Item>
        
        <Button
          type="default"
          icon={<PhoneOutlined />}
          className="login-form-google-button"
          onClick={() => onButtonClick('phone')}
           > 
           Sign in with Phone
        </Button>
        
      
        <div style={{ textAlign: 'left' }}>
          Don't have an Account?{" "}
          <Link onClick={() =>onButtonClick('signup')}>
            Sign Up
          </Link>
        
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;




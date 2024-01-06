import React, { useState } from 'react';
import '../../SignInForm/LoginForm.css';
import { LockOutlined, MailOutlined, GoogleOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';


const SignInPhone= ({onButtonClick}) => {

const [showOTP,setShowOTP] = useState(false)

const displayOTP = async(e) =>{
    try{
        setShowOTP(true)
    }catch(error){
        console.log(error)
    }
}

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
     onFinish={displayOTP}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign In With Phone</h1>
      <Form.Item
        name="PhoneNumber"
        rules={[
          {
            required: true,
            message: 'Please enter your number!',
            type: 'phonenumber',
            
            
          },
        ]}
      >
        <Input prefix={<PhoneOutlined className="site-form-item-icon" />}
         placeholder="PhoneNumber" 
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          Send OTP
        </Button>
      </Form.Item>
      {showOTP && (
        <>
          <Form.Item
            name="OTP"
            rules={[
              {
                required: true,
                message: 'Please Enter OTP ',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="OTP"
              placeholder="xxxxxx"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
            </Button>
          </Form.Item>
        </>
      )}
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
          icon={<MailOutlined />}
          className="login-form-google-button"
          onClick={() => onButtonClick('signinemail')}
        >
          Sign in with E-Mail
        </Button>
        <div style={{ textAlign: 'left' }}>
          {/* Don't have an account ? <Link to="/SignUpForm">Sign Up</Link> */}
         
          Don't have an Account?{" "}
          <Link onClick={() =>onButtonClick('signup')}>
            Sign Up
          </Link>
        
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignInPhone;




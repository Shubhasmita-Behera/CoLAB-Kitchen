import React,{useState} from 'react';
import { UserOutlined, MailOutlined, LockOutlined, GoogleOutlined,PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import './SignupForm.css';
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const { Option } = Select;

const SignUpForm = ({onButtonClick}) => {
  const [registerEmail,setregisterEmail] = useState();
  const[newPassword,setnewPassword] = useState();
  const createUser = async(e) => {
  
    const user= createUserWithEmailAndPassword(auth,registerEmail,newPassword);
    // console.log("User Created successfully",user);
  };

  return (
    <Form
      name="normal_signup"
      className="signup-form"
      initialValues={{
        remember: true,
      }}
      onFinish={createUser}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Sign Up</h1>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
      </Form.Item>
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
        value={registerEmail}
        onChange={(e)=>setregisterEmail(e.target.value)} />
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
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
          value={newPassword}
          onChange={(e)=>setnewPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="state"
        rules={[
          {
            required: true,
            message: 'Please select your State!',
          },
        ]}
      >
        <Select prefix={<EnvironmentOutlined className="site-form-item-icon" />} placeholder="State">
         
          <Option value="state1">Odisha</Option>
          <Option value="state2">West Bengal</Option>
          <Option value = "state3">Mumbai</Option>
         
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
        </Form.Item>
        <Form.Item>
        <Button
          type="default"
          icon={<GoogleOutlined />}
          className="login-form-google-button"
          style={{ width:'200px'}}
        >
          Sign Up with Google
        </Button>
        </Form.Item>
        <Form.Item>
        <Button
          type="default"
          icon={<PhoneOutlined />}
          className="login-form-google-button"
          style={{ width:'200px'}}
        >
          Sign Up with Phone
        </Button>
        <div style={{ textAlign: 'left' }}>
          Already have an account? <Link onClick={() =>onButtonClick('signinemail')}>Log In</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;


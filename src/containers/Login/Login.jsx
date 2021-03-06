import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import {notification} from 'antd';
import { Card } from 'antd';
import './Login.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
// const Login = (props) => {
    const Login = ({setUser}) => {
    const history = useHistory();
    const onFinish = users =>{
        console.log('onFinish');
        axios.post(process.env.REACT_APP_BASE_URL +'/users/login',users)
        .then(res=>{
         // props.setUser(res.data.user) //seteo el user como estado del App.js
            console.log("res data Login: "+JSON.stringify(res.data));
            setUser(res.data.user1) //seteo el user como estado del App.js
            localStorage.setItem('authToken',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user1))
            notification.success({message:'Bienvenido',description:'Bienvenido '+users.email})
            setTimeout(() => {
                history.push('/profile')
            }, 1000);
        })
        .catch(error=>console.log(error))
    }
    return (
    <div className="block">
      <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '70px', justifyContent: 'center'}}>
      <Card className="box" title="Login" bordered={false} style={{ width: 400, textAlign: 'center' }}>
        <Form {... layout}
        onFinish={onFinish}>
            <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox style={{ color:'white'}}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout} >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        </Form.Item>
        </Form>
        </Card>
        </div>
    </div>
    )
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Button, notification, Switch } from 'antd';
import './Tickets.scss';

import { TimePicker } from 'antd';
import { DatePicker } from 'antd';
import axios from 'axios';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { RangePicker } = TimePicker;
const {  Sider, Content } = Layout;
const { SubMenu } = Menu;

/* const layout = {
  labelCol: {
      span: 9,
  },
  wrapperCol: {
      span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
      offset: 8,
      span: 9,
  },
}; */


const Tickets = ({ user }) => {

    const onFinish = (ticketData) => {
        let ticket = {
            'status': ticketData.status,
            'date': ticketData.date,
            'hour': ticketData.hour,
            'observations': ticketData.observations,
            'text': ticketData.text,
            'dni': user.dni
        }
        console.log('tickett: '+JSON.stringify(ticket));
        console.log('user: '+JSON.stringify(user));
        axios.post(process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/tickets', ticket)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Ticket Create Succesfuly',description:'Ticket Create'})
            }).catch(error => {
                notification.error({ message: 'Error to create Ticket', description: 'Error to create' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);  
    };
    return (
      <>
      
      <Layout style={{ minHeight: '90vh'}}>
        <Sider>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline">
          
            <Menu.Item key="1" icon={<PieChartOutlined />}>
            View Tickets <Link to="/profile" />
            </Menu.Item>

            
            <Menu.Item  key="2" icon={<DesktopOutlined />}>
              Create Ticket <Link to="/tickets"/>
            </Menu.Item>

            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">View</Menu.Item>
              <Menu.Item key="4">Modify</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
          
        </Sider>
    
    <Layout className="site-layout">
              <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Tickets</Breadcrumb.Item>
              <Breadcrumb.Item>Create Ticket</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Create a Ticket for Support
              <Layout>
        
        <h4 className="wMen">Welcome {user?.email}</h4>

       <Layout>
       <Content>
      <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '30px', justifyContent: 'center'}}>
      
        <Form
            /* {...layout} */
            name="basic"
            initialValues={{
                remember: true,
            }}
            user={user}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
            className="status"
                label="Status"
                name="status"
                rules={[
                    {
                        required: true,
                        message: 'Active',
                    },
                ]}
            >
                
                 <Switch />
                </Form.Item>

                <Form.Item
                className="date"
                label="Elija fecha"
                name="date"
                rules={[
                    {
                        required: true,
                        message: 'Por favor elija fecha',
                    }
                ]}
                >
                <DatePicker />
                </Form.Item>

                <Form.Item
                label="Elija hora"
                name="hour"
                rules={[
                    {
                        required: true,
                        message: 'Elija hora disponible',
                    }
                ]}
                >
                <RangePicker />
                </Form.Item>
                <Form.Item
                label="Error"
                name="observations"
                rules={[
                    {
                        required: true,
                        message: 'Observaciones...',
                    },
                ]}
            >
                <Input />
                </Form.Item>


            <Form.Item
                label="Text"
                name="text"
                rules={[
                    {
                        required: true,
                        message: 'Describe your problem',
                    },
                ]}
                >
            <TextArea />
            </Form.Item>

            <Form.Item /* {...tailLayout} */>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>
            
        </Form>
        
      
            </div>
        </Content>
        </Layout>
        </Layout>
  
            </div>
          </Content>
        </Layout>
        </Layout>
    </>
);
}
export default Tickets;
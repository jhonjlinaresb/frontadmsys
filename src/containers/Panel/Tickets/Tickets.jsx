import React from 'react';
//import Profile from '../../Profile/Profile'
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Button, notification } from 'antd';

import { DatePicker } from 'antd';
import axios from 'axios';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const layout = {
  labelCol: {
      span: 8,
  },
  wrapperCol: {
      span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
      offset: 8,
      span: 16,
  },
};


const Tickets = ({ user }) => {

    const onFinish = (appointmentData) => {
        let appoinment = {
            'status': appointmentData.status,
            'date':appointmentData.date,
            'observations': appointmentData.observations,
            'dentist': appointmentData.dentist,
            'dni': user.dni
        }
        console.log('appointment: '+JSON.stringify(appoinment));
        console.log('user: '+JSON.stringify(user));
        axios.post(process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/appoinments', appoinment)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Cita creada correctamente',description:'Cita creada'})
            }).catch(error => {
                notification.error({ message: 'Error al crear cita', description: 'Hubo un error al crear cita' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);  
    };
    return (
      <>
      
      <Layout style={{ minHeight: '90vh' }}>
        <Sider>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          
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
        
       <Header><h5 style={{ textAlign: 'center', display: 'flex',  width: 200 ,justifyContent: 'center', color: 'white' }}>Bienvenido {user?.email}</h5></Header>

       <Layout>
       <Content style={{display: 'flex', justifyContent: 'center'}}>
      <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '30px', justifyContent: 'center'}}>
      
      
       
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            user={user}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                label="Estado"
                name="status"
                rules={[
                    {
                        required: true,
                        message: 'Estado',
                    },
                ]}
            >
                <Input />
                </Form.Item>

                <Form.Item
                label="Servicio"
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
                label="Dentista"
                name="dentist"
                rules={[
                    {
                        required: true,
                        message: 'Introduzca el nombre del dentista',
                    },
                ]}
                >
            <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
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
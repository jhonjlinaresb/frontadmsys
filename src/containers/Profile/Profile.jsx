import React from 'react';
import { Link } from 'react-router-dom';
//import { Layout } from 'antd';
import { Form, Input, Button, notification } from 'antd';
//import { DatePicker } from 'antd';
import axios from 'axios';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


  const Profile = ({ user }) => {

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
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    </>);
  }



export default Profile;
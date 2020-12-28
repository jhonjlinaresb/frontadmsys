import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.scss'

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;


  const Profile = ({ user }) => {

    /* const onFinish = (appointmentData) => {
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
    }; */
    
    
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
        
        {/* <Layout className="site-layout">
              <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Modify</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Modify Profile
            </div>
          </Content>
        </Layout> */}
        <div>
            <nav>
           <Layout className="site-layout">
            <Content id="cont1" style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Panel</Breadcrumb.Item>
              <Breadcrumb.Item>Tickets</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, width: 1000, minHeight: 480 }}>
              View Tickets
            </div>
          </Content>
        </Layout>
        </nav>
        </div>
        
      </Layout>
    </>);
  }



export default Profile;
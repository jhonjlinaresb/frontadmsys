import { Link } from 'react-router-dom';
import './Profile.scss'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Col, notification } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DeleteOutlined,
  UserOutlined,
  PoweroffOutlined,
  EyeOutlined,
  KeyOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;


  const Profile = ({ user }) => {

      const [tickets, userTickets] = useState([]);
      useEffect(() => {
          
              console.log(JSON.stringify(user));
              console.log('path tickets : '+process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/tickets')
              axios.get(process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/tickets',{})
              .then(res=>{
                userTickets(res.data.ticket)
                notification.success({ message :'View Tickets',description:'Tickets by DNI'})
              });
        }, [user])
      
  const deleteOne = ( ObjectId ) => {
    console.log(ObjectId);
    let a = ObjectId._id;
    console.log(a);
     //console.log('path Variable : '+process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+a)
      axios.delete(process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+a,{})
      .then(res=>{userTickets(res.data.a)
      notification.success({ message :'Ticket Delete',description:'Ticket is cancel succesfully'})
      });  
  }

  const { Column, ColumnGroup } = Table;
    
    
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

            <SubMenu key="sub1" defaultSelected="true" icon={<UserOutlined />} title="User">
              <Menu.Item key="3" icon={<EyeOutlined />}>
		        View <Link to="viewuser"/>
	          </Menu.Item>
              <Menu.Item key="4" icon={<PoweroffOutlined />}>
                Logout <Link to="/" />
                </Menu.Item>
            </SubMenu>

            <Menu.Item key="9" icon={<KeyOutlined />}>
              Admin <Link to="/admin" />
            </Menu.Item>
          </Menu>
          
        </Sider>

        <div>
           <Layout className="site-layout">
            <Content id="cont1" style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Panel</Breadcrumb.Item>
              <Breadcrumb.Item>Tickets</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background" style={{ margin: '0 16px' }}>
              View Tickets
              <Col>
              <Table dataSource={tickets} pagination={{ pageSize: 5 }}>
                  <ColumnGroup title="Tickets">
                    
                  <Column title="Status" dataIndex="status" key='status'
                  render={() => (<SyncOutlined spin />)} />
                  <Column title="Date" dataIndex="date" key='date' />
                  <Column title="Hour" dataIndex="hour" key='hour' />
                  <Column title="Error" dataIndex="observations" key='observations' />
                  <Column title="Text" dataIndex="text" key='text' />
                  <Column title="DNI" dataIndex="dni" key='dni' />
                  </ColumnGroup>

    
            <Column
              title="Action"
              key="action"
              render={(ObjectId) => (
                  
                  <button><a href="/profile" onClick={() => deleteOne(ObjectId)}><DeleteOutlined /></a>
                  </button>
                
              )}
            />
            
            
          </Table>
          </Col>
  
            </div>
          </Content>
        </Layout>
        </div>
        
      </Layout>
    </>);
  }


export default Profile;
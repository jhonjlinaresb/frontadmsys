import { Link } from 'react-router-dom';
import './Profile.scss'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Pagination, Col } from 'antd';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;


  const Profile = ({ user }) => {

    
      //console.log(JSON.stringify(user));
      const [tickets, userTickets] = useState([]);
      useEffect(() => {
          
              console.log(JSON.stringify(user));
              console.log('path tickets : '+process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/tickets')
              axios.get(process.env.REACT_APP_BASE_URL+'/users/'+user.dni+'/tickets',{})
              .then(res=>userTickets(res.data.ticket));
  
          
      }, [])
      
  const deleteOne = ( _id ) => {
    console.log('path Variable : '+process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+tickets.id)
      axios.delete(process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+_id,{})
      .then(res=>userTickets(res.data._id));
    
      console.log(_id);
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

            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">
		            View <Link to="viewuser"/>
	            </Menu.Item>
              <Menu.Item key="4">Modify</Menu.Item>
            </SubMenu>

            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
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
            
            <div className="site-layout-background">
              View Tickets
              <Col>
              <Table dataSource={tickets}>
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
              dataIndex="deleteOne"
              key="action"
              render={(_id) => (
                  <button onClick={() => deleteOne(_id)}>Cancell</button>
                
              )}
            />
            <Pagination defaultCurrent={1} total={3} />
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
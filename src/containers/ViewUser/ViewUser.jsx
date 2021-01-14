import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  RightSquareOutlined
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

  const ViewUser = ({ user }) => {

    

    
    
    return (
        <>
      <Layout style={{ minHeight: '90vh' }}>
        <Sider>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['sub1','3']} mode="inline">
          
            <Menu.Item key="1" icon={<PieChartOutlined />}>
            View Tickets <Link to="/profile" /> 
            </Menu.Item>

            
            <Menu.Item  key="2" icon={<DesktopOutlined />}>
              Create Ticket <Link to="/tickets"/>
            </Menu.Item>

            <SubMenu key="sub1" defaultSelected="true" icon={<UserOutlined />} title="User">
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
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>View</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background">
              View User
              <Card
                hoverable
                style={{ width: 800 }} 
              >
              <Meta title={<p><UserOutlined />Name: {user?.name}</p>} description={user?.name}/><hr/>
              <Meta title={<p><MailOutlined />Email: {user?.email}</p>} description={user?.email} /><hr/>
              <Meta title={<p><IdcardOutlined />DNI: {user.dni}</p>} description={user.dni} /><hr/>
              <Meta title={<p><RightSquareOutlined />ID= {user._id}</p>} description={user._id} />
              </Card>

            </div>
          </Content>
        </Layout>
        </div>
        
      </Layout>
    </>);
  }


export default ViewUser;
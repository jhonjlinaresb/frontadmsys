import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
    TeamOutlined,
    PoweroffOutlined,
    EyeOutlined,
    DatabaseOutlined,
    KeyOutlined,
} from '@ant-design/icons';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;

  const Admin = ({ user }) => {

    

    
    
    return (
        <>
      <Layout style={{ minHeight: '90vh' }}>
        <Sider>
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['9']} mode="inline">
          
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
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>Administration</Breadcrumb.Item>
            </Breadcrumb>
            
            <div className="site-layout-background">
              Welcome
              <Card
                hoverable
                style={{ width: 300 }} 
              >
              <Meta title={<p><UserOutlined />{user?.name}</p>} description='Hola'/>
              </Card><hr/>

              <Link to="/users"><Card
                hoverable
                style={{ width: 400 }} 
              >
                <TeamOutlined />
              <Meta title='All Users' description={user?.name}/>
              
              </Card></Link><hr/>

              <Link to="/showtickets"><Card
                hoverable
                style={{ width: 500 }} 
              >
              <DatabaseOutlined />
              <Meta title='All Tickets' description='Click here for view all tickets of users'/>
              </Card></Link>

            </div>
          </Content>
        </Layout>
        </div>
        
      </Layout>
    </>);
  }


export default Admin;
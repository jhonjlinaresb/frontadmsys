import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Form, Input, Button, notification, Switch } from 'antd';

import { DatePicker } from 'antd';
import axios from 'axios';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const {  Sider, Content } = Layout;
const { SubMenu } = Menu;


const Inventory = ({ user }) => {

    const onFinish = (inventoryData) => {
        let inventory = {
            'status': inventoryData.status,
            'date': inventoryData.date,
            'observations': inventoryData.observations,
            'text': inventoryData.text,
            'mark': inventoryData.mark,
            'model': inventoryData.model,
            'serial': inventoryData.serial,
            'so': inventoryData.so,
            'ram': inventoryData.ram,
            'processor': inventoryData.processor,
            'disk': inventoryData.disk,
            'price': inventoryData.price,
            'hdv': inventoryData.hdv,
            'user': inventoryData.user
        }
        console.log('inventory: '+JSON.stringify(inventory));
        console.log('user: '+JSON.stringify(user));
        axios.post(process.env.REACT_APP_BASE_URL+'/:user/inventory', inventory)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Inventory Create Succesfuly',description:'Inventory Create'})
            }).catch(error => {
                notification.error({ message: 'Error to create Inventory', description: 'Error to create' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);  
    };
    return (
      <>
       <Layout>
       <Content>
      <div className="site-card-border-less-wrapper" style={{ textAlign: 'center', display: 'flex', padding: '10px', justifyContent: 'center'}}>
      
        <Form className="forminventory"
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
                label="Observations"
                name="observations"
                rules={[
                    {
                        required: true,
                        message: 'Observaciones...',
                    },
                ]}
                >
                <Input placeholder="Your Observations" />
                </Form.Item>

            <Form.Item
                label="Notes"
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

            <Form.Item
                label="Mark"
                name="mark"
                rules={[
                    {
                        required: true,
                        message: 'Mark of computer',
                    },
                ]}
                >
                <Input placeholder="Lenovo" />
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
    </>
);}
export default Inventory;
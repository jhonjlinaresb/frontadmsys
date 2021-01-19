import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Input, Button, notification, Switch } from 'antd';

import { DatePicker , Select} from 'antd';
import axios from 'axios';
import {ArrowLeftOutlined} from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;


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
      <Link style={{color: 'black', margin: '2px'}}to="/admin"><button><ArrowLeftOutlined />Back to Admin</button></Link>
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
            <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'   }}>
           
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

            </div>
            <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'   }}>

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

            <Form.Item
                label="Model"
                name="model"
                rules={[
                    {
                        required: true,
                        message: 'Model of computer',
                    },
                ]}
                >
                <Input placeholder="111q76" />
                </Form.Item>

                <Form.Item
                label="Serial"
                name="serial"
                rules={[
                    {
                        required: true,
                        message: 'serial of computer',
                    },
                ]}
                >
                <Input placeholder="SR834FY" />
                </Form.Item>
        

                <Form.Item
                label="SO"
                name="so"
                rules={[
                    {
                        required: true,
                        message: 'System Operating of computer',
                    },
                ]}
                >
                <Select placeholder="Please select SO">
                <Option value="windows">Windows</Option>
                <Option value="linux">Linux</Option>
                <Option value="macos">Mac OS</Option>
                </Select>
                </Form.Item>

                </div>

                <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'    }}>
                
                

                <Form.Item
                label="RAM"
                name="ram"
                rules={[
                    {
                        required: true,
                        message: 'ram of computer',
                    },
                ]}
                >
                <Input placeholder="8GB" />
                </Form.Item>

                <Form.Item
                label="Processor"
                name="processor"
                rules={[
                    {
                        required: true,
                        message: 'Processor of computer',
                    },
                ]}
                >
                <Input placeholder="Intel Core I7" />
                </Form.Item>

                <Form.Item
                label="Disk"
                name="disk"
                rules={[
                    {
                        required: true,
                        message: 'Disk or SSD',
                    },
                ]}
                >
                <Input placeholder="Adata SSD 480GB" />
                </Form.Item>

                <Form.Item
                label="Price"
                name="price"
                rules={[
                    {
                        required: true,
                        message: 'Price of computer',
                    },
                ]}
                >
                <Input placeholder="1000$" />
                </Form.Item>
                </div>

                <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'    }}>

                <Form.Item
                label="HDV"
                name="hdv"
                rules={[
                    {
                        required: true,
                        message: 'HDV Fisic',
                    },
                ]}
                >
                <Select placeholder="You have HDV fisic?">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
                </Select>
                </Form.Item>

                <Form.Item
                label="User"
                name="user"
                rules={[
                    {
                        required: true,
                        message: 'User assigned for computer',
                    },
                ]}
                >
                <Input placeholder="CONT-01" />
                </Form.Item>

                <Form.Item
                label="Notes"
                name="text"
                rules={[
                    {
                        required: true,
                        message: 'Add Notes of computer',
                    },
                ]}
                >
            <TextArea />
            </Form.Item>

                </div>

                <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'    }}>

            <Form.Item /* {...tailLayout} */>
                <Button type="primary" htmlType="submit">
                    Create Inventory
                </Button>
            </Form.Item>
            </div>
            
        </Form>
        </Layout>
      
            
    </>
);}
export default Inventory;
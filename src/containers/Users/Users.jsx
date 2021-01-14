import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Table, Space } from 'antd';

import {
  CheckOutlined,
  SyncOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.get(process.env.REACT_APP_BASE_URL+'/users/showAll',{
            
        }).then(res=>setUsers(res.data));
    }, [])

    

const Column = Table;



return(
  <>
  <Link style={{color: 'black', margin: '2px'}}to="/admin"><button><ArrowLeftOutlined />Back to Admin</button></Link>
  <Table dataSource={users} pagination={{pageSize: 8}}>
      <Column title="User Id" dataIndex="_id" key='_id' />
      <Column title="Name" dataIndex="name" key="name" />
    <Column title="Email" dataIndex="email" key='email' />
    <Column title="DNI" dataIndex="dni" key='dni' />
    
    <Column
      title="Action"
      key="action"
      render={() => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
  </>
);
    
    
}

export default Users;
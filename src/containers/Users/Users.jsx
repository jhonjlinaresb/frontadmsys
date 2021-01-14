import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.get(process.env.REACT_APP_BASE_URL+'/users/showAll',{
            
        }).then(res=>setUsers(res.data));
    }, [])

    

const Column = Table;



return(
    
  <Table dataSource={users}>
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
);
    
    
}

export default Users;
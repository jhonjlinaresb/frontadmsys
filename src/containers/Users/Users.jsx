import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { Table, Space } from 'antd';

import {ArrowLeftOutlined, DeleteOutlined} from '@ant-design/icons';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.get(process.env.REACT_APP_BASE_URL+'/users/showAll',{
            
        }).then(res=>setUsers(res.data));
    }, [])

    const deleteUser = ( ObjectId ) => {
      console.log(ObjectId);
      let a = ObjectId._id;
      console.log(a);
      console.log('path Variable : '+process.env.REACT_APP_BASE_URL+'/users'+'/delete/'+a)
      axios.delete(process.env.REACT_APP_BASE_URL+'/users'+'/delete/'+a,{})
      .then(res=>setUsers(res.data.a));
       }
    

const Column = Table;



return(
  <>
  <Link style={{color: 'black', margin: '2px'}}to="/admin"><button><ArrowLeftOutlined />Back to Admin</button></Link>
  <Table dataSource={users} pagination={{pageSize: 7}}>
      <Column title="User Id" dataIndex="_id" key='_id' />
      <Column title="Name" dataIndex="name" key="name" />
    <Column title="Email" dataIndex="email" key='email' />
    <Column title="DNI" dataIndex="dni" key='dni' />
    
    <Column
              title="Action"
              key="delete"
              render={(ObjectId) => (
                  
                  <button><a href="/users" onClick={() => deleteUser(ObjectId)}><DeleteOutlined /></a>
                  </button>
                
              )}
            />
  </Table>
  </>
);
    
    
}

export default Users;
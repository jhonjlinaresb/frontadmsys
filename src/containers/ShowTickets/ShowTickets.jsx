import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Table, Space } from 'antd';

import {
  CheckOutlined,
  SyncOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

const ShowTickets = ( ) => {
    const [ viewtickets, setTickets ] = useState([]);
    useEffect(() => {
          
      axios.get(process.env.REACT_APP_BASE_URL+'/users/tickets',{
            
      }).then(res=>setTickets(res.data));
            }, [])
      
      const deleteOne = ( ObjectId ) => {
      console.log(ObjectId);
      let a = ObjectId._id;
      console.log(a);
      console.log('path Variable : '+process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+a)
      axios.delete(process.env.REACT_APP_BASE_URL+'/users'+'/tickets/'+a,{})
      .then(res=>setTickets(res.data.a));
       }
  
       const Column = Table;
return (
    <>
    <Link style={{color: 'black', margin: '2px'}}to="/admin"><button><ArrowLeftOutlined />Back to Admin</button></Link>
    <Table dataSource={viewtickets} pagination={{pageSize: 8}}>
    <Column title="Ticket Id" dataIndex="_id" key='_id' />
    <Column title="Status" dataIndex="status" key='status'
    render={() => (<SyncOutlined spin />)} />
    <Column title="date" dataIndex="date" key='date' />
    <Column title="hour" dataIndex="hour" key='hour' />
    <Column title="Observations" dataIndex="observations" key='observations' />
    <Column title="Text" dataIndex="text" key='text' />
    <Column title="DNI" dataIndex="dni" key='dni' />

    
    <Column
              title="Finish"
              key="action"
              render={(ObjectId) => (
                  <a href="/showtickets">
                  <button onClick={() => deleteOne(ObjectId)}><CheckOutlined /></button></a>
                
              )}
            />
  </Table>
  
  
  </>
);
}
    
    

export default ShowTickets;
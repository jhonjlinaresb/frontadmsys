import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Space } from 'antd';

const ShowTickets = ( ) => {
    const [ viewtickets, setTickets ] = useState([]);
    useEffect(() => {
          
      axios.get(process.env.REACT_APP_BASE_URL+'/users/tickets',{
            
      }).then(res=>setTickets(res.data));
            }, [])
  
       const Column = Table;
return (
    <>
  <Table dataSource={viewtickets} pagination={{pageSize: 6}}>
    <Column title="Ticket Id" dataIndex="_id" key='_id' />
    <Column title="Status" dataIndex="status" key="status" />
    <Column title="date" dataIndex="date" key='date' />
    <Column title="hour" dataIndex="hour" key='hour' />
    <Column title="Observations" dataIndex="observations" key='observations' />
    <Column title="Text" dataIndex="text" key='text' />
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
    
    

export default ShowTickets;
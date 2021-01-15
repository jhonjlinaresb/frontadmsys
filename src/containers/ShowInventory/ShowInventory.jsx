import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Table } from 'antd';

import {
  CheckOutlined,
  CheckCircleTwoTone,
  ArrowLeftOutlined
} from '@ant-design/icons';

const ShowInventoy = ( ) => {
    const [ inventory, setInventory ] = useState([]);
    useEffect(() => {
          
      axios.get(process.env.REACT_APP_BASE_URL+'/inventory/showInventory',{
            
      }).then(res=>setInventory(res.data));
            }, [])
      
      const deleteComputer = ( ObjectId ) => {
      console.log(ObjectId);
      let a = ObjectId._id;
      console.log(a);
      console.log('path Variable : '+process.env.REACT_APP_BASE_URL+'/inventory/'+a)
      axios.delete(process.env.REACT_APP_BASE_URL+'/inventory/'+a,{})
      .then(res=>setInventory(res.data.a));
       }
  
       const Column = Table;
return (
    <>
    <Link style={{color: 'black', margin: '2px'}}to="/admin"><button><ArrowLeftOutlined />Back to Admin</button></Link>
    <div className="site-card-border-less-wrapper" style={{ display: 'flex', padding: '10px', justifyItems: 'center', justifyContent: 'center'    }}>
    
    <Table dataSource={inventory} pagination={{pageSize: 5}}>

    
    <Column title="Status" dataIndex="status" key='status'
    render={() => (<CheckCircleTwoTone twoToneColor="#52c41a" />)} />
    <Column title="date" dataIndex="date" key='date' />
    <Column title="Observations" dataIndex="observations" key='observations' />
    <Column title="Text" dataIndex="text" key='text' />

    <Column title="Mark" dataIndex="mark" key='mark' />
    <Column title="Model" dataIndex="model" key='model' />
    <Column title="Serial" dataIndex="serial" key='serial' />
    <Column title="SO" dataIndex="so" key='so' />
    <Column title="RAM" dataIndex="ram" key='ram' />

    <Column title="Processor" dataIndex="processor" key='processor' />
    <Column title="Disk" dataIndex="disk" key='disk' />
    <Column title="Price" dataIndex="price" key='price' />
    <Column title="HDV" dataIndex="hdv" key='hdv' />
    <Column title="user" dataIndex="user" key='user' />


    
    <Column
              title="Delete"
              key="action"
              render={(ObjectId) => (
                  <a href="/showinventory">
                  <button onClick={() => deleteComputer(ObjectId)}><CheckOutlined /></button></a>
                
              )}
            />
  </Table>
  
  </div>
  </>
);
}
    
    

export default ShowInventoy;
import React from 'react'
import { Redirect } from 'react-router-dom';
import {notification} from 'antd';

const CheckPrivileges = (props) => {
    return props.roles.includes(props.user.role) ? props.children : 
    notification.error({message:'Access Invalid',description:'you do not have permissions '}) || <Redirect to='/viewuser' />;
}

export default CheckPrivileges;
import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
//import Logout from './containers/Logout/Logout';
import 'antd/dist/antd.css';
//import Register from './containers/Register/Register';
import axios from 'axios';
//import Profile from './containers/Profile/Profile';
//import Appointments from './containers/Appointments/Appointments';
//import PrivateZone from './guards/PrivateZone';
//import Error404 from './containers/Error404/Error404.jsx';
//import UserList from './containers/UserList/UserList';
//import CheckPrivileges from './guards/CheckPrivileges';
function App() {

  console.log(process.env.REACT_APP_BASE_URL);
  let initialUser = null;
  try {
    console.log(localStorage.getItem('user'));
    initialUser = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error(error);
  }
  const [user, setUser] = useState(initialUser);
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    axios.get(process.env.REACT_APP_BASE_URL + '/users',
      {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setUser(res.data)
      })
  }, []) 
  return (
    <BrowserRouter>
    
      <Header />
      <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login' exact ><Login setUser={setUser} /></Route>
      </Switch>

      <Footer />
      
    </BrowserRouter >

     

    );
  }

export default App;
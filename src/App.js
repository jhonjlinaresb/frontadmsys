import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import logout from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
//import Logout from './containers/Logout/Logout';
import 'antd/dist/antd.css';
import Register from './containers/Register/Register';
import axios from 'axios';
import Profile from './containers/Profile/Profile';
import Tickets from './containers/Panel/Tickets/Tickets';
import ViewUser from './containers/ViewUser/ViewUser';
import ShowTickets from './containers/ShowTickets/ShowTickets';
import PrivateZone from './guards/PrivateZone';
import Error404 from './containers/Error404/Error404.jsx';
import Users from './containers/Users/Users';
import Admin from './containers/Admin/Admin';
import Inventory from './containers/Inventory/Inventory'
import CheckPrivileges from './guards/CheckPrivileges';
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
      <Route path='/profile' exact><Profile user={user} /></Route>
      <Route path='/tickets' exact><Tickets user={user} /></Route>
      <Route path='/viewuser' exact><ViewUser user={user} /></Route>
      <Route path='/' component={Home} exact />
      <Route path='/login' exact ><Login setUser={setUser} /></Route>
      <Route path='/register' component={Register} exact />
      <Route path='/' component={logout} exact />
      
      <PrivateZone user={user}>
        
        <CheckPrivileges user={user} roles={['admin']}>
          <Route path='/users' exact><Users user={Users}/></Route>
          <Route path='/showtickets' exact><ShowTickets tickets={ShowTickets}/></Route>
          <Route path='/admin' exact><Admin user={Admin}/></Route>
          <Route path='/inventory' exact><Inventory user={Inventory}/></Route>
        </CheckPrivileges>
        
        
        </PrivateZone>
        <Route path='/*' component={Error404} exact />
      </Switch>

      <Footer />
      
    </BrowserRouter >

     

    );
  }

export default App;
  
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

    const Header = (props) => {
    //const Header = ({user,setUser}) => {
    const logout = () => {
        localStorage.clear();
         props.setUser(null)
    }
    return (
        <header className="header">
            <Link to="/">Home</Link>
            {props.user ?
                        <div className="loggedIn">
                            { !props.user.admin 
                            ?<Link to ="/profile" className="margin">Profile</Link>
                            :<Link to ="/administration" className="margin">Administration</Link>}
                            <span><Link to ="/" className="margin" onClick={logout}>Logout</Link></span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>}

        </header>
    )
}
export default Header; 
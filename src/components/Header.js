import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'

class Header extends Component{

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/todo">Todo List</Link></li>
                    </ul>
                </nav>                
                <div className="clear"></div>
            </div>
        )
    }
}

export default Header;
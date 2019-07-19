import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../assets/logo.svg'
//import profile_img from '../assets/profile.png'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            profilePic: ''
        }
    }

    componentDidMount() {
        const userName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : ''
        const profilePic = (localStorage.getItem('profilePic')) ? localStorage.getItem('profilePic') : ''
        this.setState({ userName: userName, profilePic: profilePic });        
    }

    showLoggedUser = () => {
        if (this.state.userName) {
            return (
                <div className="hdr-profile">
                    <div className="proflogin">
                        Welcome
                    <span className="profile"><Link to="/profile">{this.state.userName}</Link></span>
                        <span>|</span>
                        <span className="logout">Logout</span>
                    </div>
                    <div className="profimg"><img src={this.state.profilePic} alt="profile" /></div>
                </div>
            )
        }
    }

    showSignUpLink = () => {
        if (!this.state.userName) {
            return (
                <li><Link to="/signup">Signup</Link></li>
            )
        }
        else
            return
    }

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
                        {this.showSignUpLink()}
                    </ul>
                </nav>
                {this.showLoggedUser()}
                <div className="clear"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('new state = ', state);
    return {
        loggedUser: state.loggedUser.user
    }
}

export default connect(mapStateToProps)(Header);
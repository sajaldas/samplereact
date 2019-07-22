import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUser } from '../redux/actions/signup-actions'
import _ from 'lodash'

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
        // const userName = (localStorage.getItem('userName')) ? localStorage.getItem('userName') : ''
        // const profilePic = (localStorage.getItem('profilePic')) ? localStorage.getItem('profilePic') : ''
        // this.setState({ userName: userName, profilePic: profilePic });
        //console.log('header props = ', this.props)
    }

    handleLogout = () => {
        // window.localStorage.removeItem('userName');
        // window.localStorage.removeItem('profilePic');
        //console.log('logout props = ', this.props)
        this.props.logoutUser({ user: this.props.user })
        this.props.history.push("/signup")
    }

    showLoggedUser = () => {
        ///if (this.state.userName) {                                    
        if (Object.keys(this.props.loggedUser).length > 0) {
            if (this.props.loggedUser.user !== undefined) {
                let name = this.props.loggedUser.user.name;
                let pic = this.props.loggedUser.user.picture;
                return (
                    <div className="hdr-profile">
                        <div className="proflogin">
                            Welcome
                        <span className="profile"><Link to="/profile">{name}</Link></span>
                            <span>|</span>
                            <span className="logout" onClick={() => this.handleLogout()}>Logout</span>
                        </div>
                        <div className="profimg"><img src={pic} alt="profile" /></div>
                    </div>
                )
            }
        }
    }

    showSignUpLink = () => {
        //let name = this.props.loggedUser.user.name;
        //if (!name) {
        if (_.isEmpty(this.props.loggedUser)) {
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
    // console.log('header abab = ', state.loggedUser);
    // console.log('length  = ', Object.keys(state.loggedUser.user).length)
    return {
        loggedUser: (Object.keys(state.loggedUser.user).length) ? state.loggedUser.user : {}
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logoutUser: logoutUser,
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
import React, { Component } from 'react';
import { connect } from 'react-redux'

import profile_img from '../assets/profile.png'

class Profile extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {            
    //     }
    // }

    showUserInfo = () => {
        if(this.props.loggedUser.name){
            //console.log('user = ', this.props.loggedUser);            
            return (
                <div className="profile_container">
                    <div className="profileimg">                        
                        <img src={this.props.loggedUser.picture} alt="profile img2" />                        
                    </div>
                    <div className="userdetails">
                        <table cellPadding="4" cellSpacing="0">
                            <tbody>
                                <tr>
                                    <td>First Name: </td>
                                    <td>{this.props.loggedUser.given_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name: </td>
                                    <td>{this.props.loggedUser.family_name}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{this.props.loggedUser.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }    
        else
        return;    
    }

    render() {
        //console.log(this.props.loggedUser)
        return (
            <div className="innercontent">
                <h1>User Profile Page</h1>
                <div className="prodcontainer">
                    {this.showUserInfo()}
                </div>
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

export default connect(mapStateToProps)(Profile);

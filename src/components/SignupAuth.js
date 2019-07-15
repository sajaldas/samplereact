import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateLoggedInUser } from '../redux/actions/signup-actions'

const USERINFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo'

const axios = require('axios');

class SignupAuth extends Component {

    componentDidMount(){        
        if(this.props.location.hash!=='')
        {
            let hash = this.props.location.hash.split('#access_token=')
            let spl = hash[1].split('&')
            let access_code = spl[0]
            //console.log('access_code = ', access_code);
            
            const authStr = 'Bearer '.concat(access_code); 
            axios.get(USERINFO_URL, { headers: { Authorization: authStr }})
            .then(response => {
                //console.log('response = ', response);
                if(response.data){                                        
                    this.props.updateLoggedInUser(response.data)
                }
            })
            .catch(error => {
                if(error.response)
                console.log('error = ', error.response.data.error)
            });
        }        
    }
    
    render() {        
        return (
            <div className="innercontent">                
                <h1>Validating user ...</h1>
                <div className="prodcontainer">
                    {/* <div className="todocontainer">
                        <div className="formbox login">
                            
                        </div>                        
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('new state = ', state);
    return {
        //todos: state.todos.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateLoggedInUser: updateLoggedInUser,        
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupAuth);


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTolist, updateToDoStatusDone, updateToDoStatusNotDone, deleteFromList } from '../redux/actions/todo-actions'


const CLIENT_ID = '566747368285-nutel28dapl8063tchef5pnbmfmngslk.apps.googleusercontent.com'
const SECRET = 'pn2mTRdDNvXa-TDA8cosyOQ4'
const REDIRECT_URL = 'http://localhost:3000/todo'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            emailInputText: '',
            emailInputValue: '',
            passInputText: '',
            passInputValue: '',
            // filterApplied: false,
            // filterType: 'all',
            // itemId: 0,
            // toDoList: []
        }        
    }

    componentDidMount(){
        window.gapi.signin2.render('g-signin2', {
            'scope': 'https://www.googleapis.com/auth/plus.login',
            'width': 200,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': this.onSignIn
        })
    }

    onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();        
		sessionStorage.setItem('authToken', profile.getId());
		sessionStorage.setItem('name', profile.getName());
		sessionStorage.setItem('imageUrl', profile.getImageUrl());
		sessionStorage.setItem('email', profile.getEmail());

        console.log('id = ', profile.getId())
        console.log('name = ', profile.getName())
        console.log('photo = ', profile.getImageUrl())
        console.log('email = ', profile.getEmail())

		// let account = this.props.cursor.refine('account');
		// account.refine('authToken').set(sessionStorage.getItem('authToken'));
		// account.refine('name').set(sessionStorage.getItem('name'));
		// account.refine('imageUrl').set(sessionStorage.getItem('imageUrl'));
		// account.refine('email').set(sessionStorage.getItem('email'));
	}
    
    handleInput = (e, fieldType) => {
        //console.log('val = ', e.target.value)
        if(fieldType=='email')
        {
            this.setState({ emailInputText: e.target.value })
            this.setState({ emailInputValue: e.target.value })
        }
        else{
            this.setState({ passInputText: e.target.value })
            this.setState({ passInputValue: e.target.value })
        }        
    }

    handleLoginButtonClick = () => {
        let email  = this.state.emailInputValue
        let pass  = this.state.passInputValue
        console.log('email = ', email)
        console.log('pass = ', pass)
        // let login_url = 'https://accounts.google.com/o/oauth2/v2/auth?scope=' +
        // encodeURI('https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email') +
        //  '&redirect_uri=' + encodeURI(REDIRECT_URL) +
        //  '&response_type=code&client_id=' + CLIENT_ID + '&access_type=online';
        //  console.log('login_url = ', login_url)        
    }
    
    render() {
        return (
            <div className="innercontent">                
                <h1>Login Page</h1>
                <div className="prodcontainer">
                    <div className="todocontainer">
                        <div className="formbox login">
                            <div className="row">
                                <label>Login Id:</label><input type="text" id="email" onChange={(event) => this.handleInput(event, 'email')} value={this.state.inputValue} />
                            </div>
                            <div className="row">
                                <label>Password:</label><input type="text" id="pass" onChange={(event) => this.handleInput(event, 'pass')} value={this.state.inputValue} />
                            </div>
                            {/* <div className="row"><button className="btn btn-primary" id="g-signin2" onClick={this.handleLoginButtonClick}>Login</button></div> */}
                            <div className="row" id="g-signin2"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('new state = ', state);
    return {
        todos: state.todos.todoList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTolist: addTolist,
        updateToDoStatusDone: updateToDoStatusDone,
        updateToDoStatusNotDone: updateToDoStatusNotDone,
        deleteFromList: deleteFromList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);


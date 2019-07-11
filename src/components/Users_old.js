import React, { Component } from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'

import User from './User'
import configureStore from "../redux/store/configureStore";
import {updateUpVote, updateDownVote} from '../redux/actions/user-actions'

const store = configureStore()

const axios = require('axios');

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            electedUsers: []
        }
    }

    storeUpdated = () =>{
      console.log('subscribed to store');
      //console.log('store users = ', store.getState().users)
      this.setState({
        electedUsers: store.getState().users.electedUsers
      })
    }

    componentDidMount() {
      console.log('hi');
        let url = 'https://api.github.com/users'
        //fetch(url).then(response => response.json()).then(data => console.log(data));
        axios.get(url).then(response => {
          console.log('response = ', response);
          this.setState({
            users: response.data
          })
        });
    }

    handleLikePress = (uid) =>{
      console.log('onLikePress')      
      const payload={
        id: uid        
      }
      //store.dispatch(updateUpVote(payload))
      this.props.updateUpVote(payload)
      //console.log('store users = ', store.getState().users)
      // store.subscribe(() => {
      //   this.storeUpdated()
      // })
    }

    handleDislikePress = (uid) =>{
      console.log('onDislikePress')
      const payload={
        id: uid        
      }
      this.props.updateDownVote(payload)
      //store.dispatch(updateDownVote(payload))
      //store.subscribe(this.storeUpdated);
    }

    getUservotes (uid) {
      let userVotes=this.state.electedUsers;
      //console.log('sajal = ', userVotes);
      return _.find(userVotes, (item) => item.id===uid)      
    }

    renderGitProfiles = () => {
        let users = this.state.users;
        //console.log('state = ', this.state);
        let user_data = [];
        if (users.length) {
          users.forEach((user) => {
            user_data.push(<User data={user} key={user.id} 
              onLikePress={() => this.handleLikePress(user.id)} 
              onDislikePress={() => this.handleDislikePress(user.id)}
              votes={this.getUservotes(user.id)} />);
          })
        }
        return user_data;
    }

    render() {
      console.log('app Props state = ', this.props.electedUsers);
        return (
            <div className="innercontent">
                <h1>Git Profiles Page</h1>
                <div className="usercontainer">{this.renderGitProfiles()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps state = ', state);
  return {
    electedUsers: state.electedUsers
  }
}

const mapDispatchToProps = (dispatch) => {  
  return bindActionCreators({
    updateUpVote: updateUpVote,
    updateDownVote: updateDownVote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
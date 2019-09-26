import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import configureStore from "../redux/store/configureStore";
import { updateUpVote, updateDownVote } from '../redux/actions/user-actions'

const store = configureStore()

const axios = require('axios');

//const HOST ='http://localhost/react/';
const HOST ='http://dev.vrtechnologies.info/';

class Movies extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      //electedUsers: []
    }
  }

  componentDidMount() {
    let url = HOST+'wp-json/apis/v1/moviecategories'
    //fetch(url).then(response => response.json()).then(data => console.log(data));
    axios.get(url).then(response => {
      //console.log('response = ', response);
      this.setState({
        categories: response.data
      })
    });
  }

  renderMovieCategories = () => {
    let cats = this.state.categories;
    //console.log('state = ', this.state);
    let category_arr = [];
    if (cats.length) {
      cats.forEach((cat) => {
        category_arr.push(<div key={cat.term_id} className="moviecat"><div className="catimg"><img src={cat.img} /></div><div className="catname">{cat.name}</div></div>);
      })
    }
    return category_arr;
  }

  render() {
    //console.log('app Props state = ', this.props.electedUsers);
    return (
      <div className="innercontent">
        <h1>Git Profiles Page</h1>
        <div className="moviecontainer">{this.renderMovieCategories()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log('new state = ', state);
  return {
    electedUsers: state.users.electedUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUpVote: updateUpVote,
    updateDownVote: updateDownVote
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
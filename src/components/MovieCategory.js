import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//import _ from 'lodash'

//import User from './User'
import configureStore from "../redux/store/configureStore";
import { updateUpVote, updateDownVote } from '../redux/actions/user-actions'

const store = configureStore()

const axios = require('axios');

//const HOST ='http://localhost/react/';
const HOST ='http://dev.vrtechnologies.info/';

class MovieCategory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      categoryId: ''
      //electedUsers: []
    }
  }

  componentDidMount() {
    const categoryId = this.props.match.params.id;
    //console.log('categoryId = ', categoryId)
    let url = HOST+'wp-json/apis/v1/moviecategories'
    if (categoryId) {
      url += '/' + categoryId
    }

    //fetch(url).then(response => response.json()).then(data => console.log(data));
    axios.get(url).then(response => {
      //console.log('response = ', response);
      this.setState({
        categories: response.data
      })
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidUpdate(nextProps) {
    console.log('this.props = ', this.props)
    console.log('nextProps = ', nextProps)
    const categoryId = this.props.match.params.id;
    //console.log('categoryId = ', categoryId)
    let url = HOST+'wp-json/apis/v1/moviecategories'
    if (categoryId) {
      url += '/' + categoryId
    }
    axios.get(url).then(response => {
      console.log('response 1 = ', response);
      // this.setState({
      //   categories: response.data
      // })
    }).catch(function (error) {
      console.log(error);
    });
  }

  renderMovieCategories = () => {
    let cats = this.state.categories;
    //console.log('state = ', this.state);
    let category_arr = [];
    if (cats.length) {
      cats.forEach((cat) => {
        category_arr.push(<div key={cat.term_id} className="moviecat">
          <Link to={'/moviecategory/' + cat.term_id}>
            <div className="catimg" ><img src={cat.img} /></div>
            <div className="catname">{cat.name}</div>
          </Link>
        </div>);
      })
    }
    return category_arr;
  }

  render() {
    //console.log('app Props state = ', this.props.electedUsers);
    console.log(this.state.categoryId)
    return (
      <div className="innercontent">
        <h1>Movie Categories</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieCategory);
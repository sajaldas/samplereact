import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Todo from './Todo';
import Signup from './Signup';
import SignupAuth from './SignupAuth';
import Profile from './Profile';
import MovieCategory from './MovieCategory'
import Map from './Map'

class Container extends Component {
    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                    <Route exact path="/todo" component={Todo} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/authenticate" component={SignupAuth} />                    
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/moviecategory" component={MovieCategory} />
                    <Route exact path="/moviecategory/:id" component={MovieCategory} />
                    <Route exact path="/map" component={Map} />
                </Switch>
            </div>
        )
    }
}

export default Container;
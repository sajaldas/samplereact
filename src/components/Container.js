import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Todo from './Todo';
import Signup from './Signup';
import SignupAuth from './SignupAuth';

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
                </Switch>
            </div>
        )
    }
}

export default Container;
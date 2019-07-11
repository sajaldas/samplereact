import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class User extends Component {

    constructor(props) {
        super(props)
        this.state = {
            //id: this.props.data.id,
            loginId: this.props.data.login,
            img: this.props.data.avatar_url
        }
    }


    render() {
        //console.log('votes = ', this.props.votes)
        return (
            <div className="user-item">
                <div className="wrap">
                    <div className="userimg">
                        <img src={this.state.img} alt={this.state.loginId} />
                    </div>
                    <div className="usertitle">{this.state.loginId}</div>
                    <ul className="vote">
                        <li className="like">
                            <div className="innerbtn">
                                <i className="fal fa-thumbs-up" onClick={() => this.props.onLikePress()}></i>
                                <span>{(this.props.votes) ? this.props.votes.up : 0}</span>
                            </div>
                        </li>                        
                        <li className="dislike">
                            <div className="innerbtn">
                                <span>{(this.props.votes) ? this.props.votes.down : 0}</span>
                                <i className="fal fa-thumbs-down" onClick={() => this.props.onDislikePress()}></i>
                            </div>
                            
                        </li>
                    </ul>
                    {/* {this.renderButton()} */}
                </div>
            </div>
        )
    }
}

export default User;
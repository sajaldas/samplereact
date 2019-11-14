import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTodolist, setTolist, addTolist, updateToDoStatusDone, updateToDoStatusNotDone, deleteFromList } from '../redux/actions/todo-actions'

const axios = require('axios');

const HOST ='http://localhost/react/';
//const HOST ='http://dev.vrtechnologies.info/';

class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputText: '',
            inputValue: '',
            filterApplied: false,
            filterType: 'all',
            itemId: 0,
            toDoList: [],
            reatApiToken:null
        }

        this.props.getTodolist()
    }

    componentDidMount() {        
        // let url = HOST+'wp-json/jwt-auth/v1/token'        
        // axios.post(url, {
        //     username: "admin",
        //     password: "admin"
        // }).then(response => {          
        //     //console.log('response = ', response);            
        //   if(response.data.token!==undefined)
        //   {              
        //     this.setState({
        //         reatApiToken: response.data.token
        //     })
        //     this.getTodoList()            
        //   }        
        // }).catch(function (error) {
        //   console.log(error);
        // });
    }

    componentDidUpdate(nextProps) {
        console.log('componentDidUpdate called');
    }

    transformTodoList = (data) => {        
        let newArr = data.data.map((item, index) => {        
            return {id: item.id, name: item.title.rendered, done: false}
        })
        //console.log('newArr = ', newArr);
        return newArr;
    }

    // getTodoList = () => {
    //     axios.get(HOST+'wp-json/wp/v2/todo').then(resp => {
    //         //console.log('todos list = ', resp);
    //         const transformTodoList = this.transformTodoList(resp)
    //         //console.log('transformTodoList = ', transformTodoList)
    //         this.props.setTolist(transformTodoList)            
    //     })
    // }

    handleInput = (e) => {
        //console.log('val = ', e.target.value)
        this.setState({ inputText: e.target.value })
        this.setState({ inputValue: e.target.value })
    }

    handleAddToList = () => {
        if(!!this.state.inputText)
        {
            let id = this.state.itemId;
            id++;
            this.setState({ itemId: id })
            //console.log('text = ', this.state.inputText);        
            this.props.addTolist({ name: this.state.inputText, id: id })            
            this.setState({ inputValue: '' })
            this.setState({ inputText: '' }) 
            let self = this;
            setTimeout(function(){                
                self.filterList(self.state.filterType)
            }, 100)
        }
    }

    filterList = (type) => {            
        this.setState({filterType: type})
        if(type==='all')
            this.setState({filterApplied: false})                        
        else {
            let filter = (type==='complete') ? true : false;
            var newlist = this.props.todos.filter(function (item) {
                return item.done === filter;
            });                    
            //console.log('filtered list = ', newlist);
            this.setState({toDoList: newlist})            
            this.setState({filterApplied: true})
        }                        
    }

    renderToDos() {        
        return (            
            <div>
                <div className="tablinks">
                    <span onClick={() => this.filterList('all')} className={(this.state.filterType==='all') ? 'active' : ''}>All</span>
                    <span onClick={() => this.filterList('pending')} className={(this.state.filterType==='pending') ? 'active' : ''}>Pending</span>
                    <span onClick={() => this.filterList('complete')} className={(this.state.filterType==='complete') ? 'active' : ''}>Completed</span>
                </div>
                <div className="listbox">
                    <ul>{this.renderToDoList()}</ul>                    
                </div>
            </div>
        )        
    }

    handleCheckBox = (is_chk, id) => {
        //console.log('chk = ', is_chk);
        if(is_chk)
        this.props.updateToDoStatusDone({id: id})
        else
        this.props.updateToDoStatusNotDone({id: id})
        //console.log('this.props = ', this.props)
        this.filterList(this.state.filterType)
    }

    removeItem = (id) => {        
        this.props.deleteFromList({id: id, doConfirm: true})
    }

    renderToDoList = () => {
        //let items = this.props.todos;
        //console.log('toDoList aa = ', this.props.todos)
        let items;
        if(this.state.filterApplied===false)
        items = this.props.todos;
        else if(this.state.filterApplied===true)
        items = this.state.toDoList;

        //console.log('items = ', items)
        
        if (items.length) {        
            return items.map((item) => {
                return (
                    <li key={item.id}><label><input type="checkbox" onChange={(e) => this.handleCheckBox(e.target.checked, item.id)} 
                    checked={(item.done) ? "checked" : "" } /> 
                    <span>{item.name}</span></label>
                    <i className="fa fa-trash list-rm" aria-hidden="true" onClick={() => this.removeItem(item.id)}></i>
                    </li>
                )
            })
        }
        else            
        return (<li><label> <span>No Items</span></label></li>)        
        
    }

    render() {        
        return (
            <div className="innercontent">
                <h1>Todo List Page</h1>
                <div className="prodcontainer">
                    <div className="todocontainer">
                        <div className="formbox">
                            <input type="text" onChange={(event) => this.handleInput(event)} value={this.state.inputValue} />
                            <button className="btn btn-primary" onClick={this.handleAddToList}>Add</button>
                        </div>
                        {this.renderToDos()}
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
        getTodolist: getTodolist,
        setTolist: setTolist,
        addTolist: addTolist,
        updateToDoStatusDone: updateToDoStatusDone,
        updateToDoStatusNotDone: updateToDoStatusNotDone,
        deleteFromList: deleteFromList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);


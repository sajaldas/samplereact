import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from "classnames";
import { getTodolist, setTolist, addTolist, updateToDoStatusDone, updateToDoStatusNotDone, deleteFromList, updateToDoStatus } from '../redux/actions/todo-actions'


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
        //console.log('componentDidUpdate called');
    }    

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
            const postData = { title: this.state.inputText, status: 'publish' }; //id: id
            this.props.addTolist(postData)            
            this.setState({ inputValue: '' })
            this.setState({ inputText: '' })             
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
        this.props.updateToDoStatus({id: id, done: is_chk, loading: true})
        // if(is_chk)
        // this.props.updateToDoStatusDone({id: id})
        // else
        // this.props.updateToDoStatusNotDone({id: id})
        // //console.log('this.props = ', this.props)
        // this.filterList(this.state.filterType)
    }

    removeItem = (id) => {        
        this.props.deleteFromList({id: id, loading: true})
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
                //console.log('item = ', item)
                return (
                    <li key={item.id}>
                        <label>
                        <div className="actionbox">
                            <input type="checkbox" className={
                                classNames({'show': !item.loading, 'hide': item.loading})
                            } onChange={(e) => this.handleCheckBox(e.target.checked, item.id)} checked={(item.done) ? "checked" : "" } /> 
                            <div className={
                                classNames('loader', {'show': item.loading, 'hide': !item.loading})
                            }>
                                <ReactLoading type="spokes" color="#3794ff" height={16} width={16} />
                            </div>
                        </div>                            
                        <span>{item.name}</span>
                        </label>
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
        updateToDoStatus,
        updateToDoStatusDone: updateToDoStatusDone,
        updateToDoStatusNotDone: updateToDoStatusNotDone,
        deleteFromList: deleteFromList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);


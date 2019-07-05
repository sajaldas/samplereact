import { createStore, combineReducers } from 'redux'

import usersReducer from '../reducers/user-reducer'
import todoReducer from '../reducers/todo-reducer'

const allReducers = combineReducers({
  users: usersReducer,
  todos: todoReducer
})

export default function configureStore() {    
    const store = createStore(
        allReducers      
    );    
    return store;
}




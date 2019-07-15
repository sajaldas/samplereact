import { createStore, combineReducers, applyMiddleware } from 'redux'

import usersReducer from '../reducers/user-reducer'
import todoReducer from '../reducers/todo-reducer'
import signupReducer from '../reducers/signup-reducer'

const allReducers = combineReducers({
  users: usersReducer,
  todos: todoReducer,
  loggedUser: signupReducer
})

const confirmationMiddleware = store => next => action => {
  //console.log('action = ', action)
  if(action.payload.doConfirm)
  {
    if(window.confirm('Are you sure ?'))
    next(action)  
  }
  else
  next(action)
}

export default function configureStore() {    
    const store = createStore(
        allReducers,
        applyMiddleware(confirmationMiddleware)      
    );    
    return store;
}




import { actionTypes } from "../actions/todo-actions";
import _ from 'lodash'

const initialState = {
  todoList: []
}

const updateToDoList = (toDos, delItem, status) => {
  const index = _.findIndex(toDos, (item) => item.id === delItem)
  return [
    ...toDos.slice(0, index),
    { ...toDos[index], done: status },
    ...toDos.slice(index + 1)
  ]
}

export default function todoReducer(state = initialState, action) {
  //console.log('state = ', state, 'action = ', action)  
  let { type, payload } = action;
  let newState;
  switch (type) {
    case actionTypes.ADD_TO_LIST:
      newState = { ...state, todoList: [...state.todoList, { id: payload.id, name: payload.name, done: false }] }
      //console.log('newState = ', newState)
      return newState
    case actionTypes.UPDATE_STATUS_DONE:
      newState = { ...state, todoList: updateToDoList(state.todoList, payload.id, true) }
      return newState
    case actionTypes.UPDATE_STATUS_NOTDONE:
      newState = { ...state, todoList: updateToDoList(state.todoList, payload.id, false) }
      return newState
    case actionTypes.DELETE_FROM_LIST:      
      newState = { ...state, todoList: _.filter(state.todoList, function(item) { return item.id!==payload.id; }) }            
      return newState
    default:
      return state
  }
}
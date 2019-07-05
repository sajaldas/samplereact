import { actionTypes } from "../actions/user-actions";
import _ from 'lodash'

const initialState = {
  electedUsers: []
}

const saveUserUpvote = (electedusers, id) =>{  
  if(!electedusers.length)
  return [{id: id, up: 1, down: 0}]
  else
  {
    const index = _.findIndex(electedusers, (item) => item.id===id)    
    if(index<0)
    return [...electedusers, {id: id, up: 1, down: 0}]
    else{      
      return [
        ...electedusers.slice(0, index),
        {...electedusers[index], up: electedusers[index].up+1},        
        ...electedusers.slice(index+1)
      ]
    }
  }
}

const saveUserDownvote = (electedusers, id) =>{  
  if(!electedusers.length)
  return [{id: id, up: 0, down: 1}]
  else
  {
    const index = _.findIndex(electedusers, (item) => item.id===id)    
    if(index<0)
    return [...electedusers, {id: id, up: 0, down: 1}]
    else{      
      return [
        ...electedusers.slice(0, index),
        {...electedusers[index], down: electedusers[index].down+1},        
        ...electedusers.slice(index+1)
      ]
    }
  }
}

export default function usersReducer(state = initialState, action) {
  //console.log('state = ', state, 'action = ', action)  
  let { type, payload } = action;
  switch (type) {
    case actionTypes.UP_VOTE:      
    let newStateUp = { ...state,  electedUsers: saveUserUpvote(state.electedUsers, payload.id) }
      //console.log('newState = ', newState)
      return newStateUp
    case actionTypes.DOWN_VOTE:
      let newStateDown = { ...state,  electedUsers: saveUserDownvote(state.electedUsers, payload.id) }
      //console.log('newState = ', newState)
      return newStateDown
    default:
      return state
  }
}
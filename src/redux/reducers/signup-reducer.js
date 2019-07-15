import { actionTypes } from "../actions/signup-actions";
//import _ from 'lodash'

const initialState = {
    user: {}
}

export default function signupReducer(state = initialState, action) {
  //console.log('state = ', state, 'action = ', action)  
  let { type, payload } = action;
  let newState;
  switch (type) {
    case actionTypes.UPDATE_USER:
      //console.log('payload = ', payload);
      newState = { ...state, user: payload }
      //console.log('newState = ', newState)
      return newState
    default:
      return state
  }
}
const GET_LIST = "get_list";
const SET_TO_LIST = "set_to_list";
const ADD_TO_LIST = "add_to_list";
const DELETE_FROM_LIST = "delete_from_list";
const UPDATE_STATUS_DONE = "update_status_done";
const UPDATE_STATUS_NOTDONE = "update_status_notdone";


export const actionTypes = {
  GET_LIST,
  SET_TO_LIST,
  ADD_TO_LIST,
  DELETE_FROM_LIST,
  UPDATE_STATUS_DONE,
  UPDATE_STATUS_NOTDONE
}

export function getTodolist(payload) {  
  return {
      type: GET_LIST      
  }
}

export function setTolist(payload) {
  //console.log('payload = ', payload)
  return {
      type: SET_TO_LIST,
      payload: payload
  }
}

export function addTolist(payload) {
  //console.log('payload = ', payload)
  return {
      type: ADD_TO_LIST,
      payload: payload
  }
}

export function deleteFromList(payload) {
  return {
      type: DELETE_FROM_LIST,
      payload: payload
  }
}

export function updateToDoStatusDone(payload) {
  return {
      type: UPDATE_STATUS_DONE,
      payload: payload
  }
}

export function updateToDoStatusNotDone(payload) {
  return {
      type: UPDATE_STATUS_NOTDONE,
      payload: payload
  }
}

export default {
  getTodolist,
  setTolist,
  addTolist,
  deleteFromList,
  updateToDoStatusDone,
  updateToDoStatusNotDone
}
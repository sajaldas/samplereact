import { takeLatest, put, call, all, takeEvery } from "redux-saga/effects"

import {
    actionTypes,
    getAllUsers        
} from "../actions/UserActions";
import {    
    setTolist
} from "../actions/todo-actions";

import Api from "../../network/api";

let ApiCall = new Api();

function* GetUsers() {
    try{
        console.log('worker saga called');
        const list = yield call(ApiCall.getList)
        yield put(setTolist(list.data));
    }
    catch(error){
        console.log(error)
    }       
}

export function* watchGetUsers() {
    try{
        console.log('watcher saga called');
        yield takeEvery(actionTypes.GET_ALL_USERS, GetUsers)
    }
    catch(error){
        console.log(error)
    }    
}

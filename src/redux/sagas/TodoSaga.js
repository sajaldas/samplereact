import {call, put, takeEvery} from 'redux-saga/effects'

import Api from "../../network/api";
import { actionTypes, getTodolist, setTolist, updateList, deleteFromStore } from "../actions/todo-actions";
import {transformApiPayloadToStore} from '../transformers/TodoTransformer'

let ApiCall = new Api();


function* GetTodos()
{
    //console.log('listning to get list saga')
    const list = yield call(ApiCall.getList)
    //console.log('list = ', list)
    const newList = transformApiPayloadToStore(list)
    yield put(setTolist(newList))
}

export function* watchGetTodos()
{
    try {
        yield takeEvery(actionTypes.GET_LIST, GetTodos)
    } catch (error) {
        console.log(error)
    }
}

function* AddTodo(data)
{
    //console.log('data payload = ', data)
    const result = yield call(ApiCall.addtoList, data.payload)
    const addedItem = transformApiPayloadToStore(result)    
    yield put(updateList(addedItem))        
}

export function* watchAddTodo()
{
    try {        
        yield takeEvery(actionTypes.ADD_TO_LIST, AddTodo)        
    } catch (error) {
        console.log(error)
    }
}

function* DeleteTodo(data)
{
    //console.log('data payload = ', data)
    const result = yield call(ApiCall.deleteFromList, data.payload)
    yield put(deleteFromStore(result))
}

export function* watchDeleteTodo()
{
    try {        
        yield takeEvery(actionTypes.DELETE_FROM_LIST, DeleteTodo)
    } catch (error) {
        console.log(error)
    }
}
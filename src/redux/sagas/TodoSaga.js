import {call, put, all, takeEvery, takeLatest} from 'redux-saga/effects'

import Api from "../../network/api";
import { actionTypes, getTodolist } from "../actions/todo-actions";

let ApiCall = new Api();


function* GetTodos()
{
    const list = yield call(ApiCall.getList)
    console.log('list = ', list)
}

export function* watchGetTodos()
{
    try {
        yield takeEvery(actionTypes.GET_LIST, GetTodos)
    } catch (error) {
        console.log(error)
    }
}
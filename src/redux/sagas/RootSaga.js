import { all } from "redux-saga/effects";

import {watchGetTodos, watchAddTodo, watchDeleteTodo} from '../sagas/TodoSaga'


export default function* rootSaga() {    
    yield all([
        watchGetTodos(),
        watchAddTodo(),
        watchDeleteTodo()
    ])
}


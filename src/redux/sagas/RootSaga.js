import { all } from "redux-saga/effects";

import {watchGetTodos} from '../sagas/TodoSaga'


export default function* rootSaga() {
    yield all([
        watchGetTodos(),
    ])
}


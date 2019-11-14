import { all, fork } from 'redux-saga/effects';
import CustomTextInputSagas from './RootSaga';

export default function* rootSaga() {
    yield all([
        fork(CustomTextInputSagas.watcherTextChanged),
    ]);
}
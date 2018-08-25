import { all } from 'redux-saga/effects';
import handleError from './handleError';
import logActionsSaga from './logActions';

const allSagas = [
    handleError(),
    logActionsSaga()
];

export default function* rootSaga() {
    yield all(allSagas);
}
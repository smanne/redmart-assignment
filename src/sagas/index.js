import { all } from 'redux-saga/effects';
import handleError from './handleError';
import logActionsSaga from './logActions';
import loadData from  './loadData';
import filterProducts from  './filterProducts';

/**
 * Root Saga
 */
const allSagas = [
    handleError(),
    logActionsSaga(),
    loadData(),
    filterProducts()
];

export default function* rootSaga() {
    yield all(allSagas);
}
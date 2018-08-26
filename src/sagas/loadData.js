import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from '../actions/data';
import data from '../constants/data';
import { setProducts, setFilters } from '../actions/products';

/**
 * Load static data from constants
 */
export default function* loadData() {
    try {
        yield takeLatest(LOAD_DATA, load);
    } catch (error) {
        console.log("Error loading static data", error);
    }
}

function* load() {
    try {
        let products = data.products.map((product, index) => {
            product.id = index;
            return product;
        })
        console.log(products);
        yield put(setProducts(data.products));
        yield put(setFilters(data.filters));
    } catch (error) {
        console.log("Error loading static data", error);
    }
}
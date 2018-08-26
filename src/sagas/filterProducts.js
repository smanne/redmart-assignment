import { put, takeLatest  } from 'redux-saga/effects';
import { FILTER_PRODUCTS } from '../actions/products';
import data from '../constants/data';
import { setProducts, setFilters } from '../actions/products';

/**
 * Filter products saga
 */
export default function* filterProducts() {
    try {
        yield takeLatest(FILTER_PRODUCTS, filter);
    } catch (error) {
        console.log("Error filtering data", error);
    }
}

function* filter(action) {
    try {
        const selectedFilters = action.payload;
        let filterProducts = data.products;

        //Filter products by brand name
        if (selectedFilters.brand && selectedFilters.brand.length > 0) {
            filterProducts = filterProducts.filter((product) => {
                return selectedFilters.brand.indexOf(product.brand) > -1;
            })
        }
        // Filter products by price range
        if (selectedFilters.price && selectedFilters.price.length > 0) {
            const priceRanges = [];
            selectedFilters.price.forEach(priceRange => {
                const [min, max] = priceRange.split("-");
                priceRanges.push([parseFloat(min), parseFloat(max)]);
            });
            
            filterProducts = filterProducts.filter((product) => {
                return priceRanges.some(([min, max]) => {
                    if (min < product.price && max > product.price) {
                        return true;
                    }
                })
            })
        }
        yield put(setProducts(filterProducts));
        yield put(setFilters(data.filters));
    } catch (error) {
        console.log("Error filtering products", error);
    }
    }

import axios from 'axios';

import {jsonProducts} from '../JSONproducts.js'

export const GET_PRODUCTS = 'GET_USERS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'

export function getProducts() {
    return async function(dispatch) {
        const json = await axios('https://dummyjson.com/products')
        const data = await json.data
        const info = await data.products
        return dispatch({
            type: GET_PRODUCTS,
            payload: info
        })
    }
}

export const getProductByName = (name) => (dispatch) => {
    let toName = jsonProducts.map(p => p.name);
    let filtered = toName.filter(p => p.toLocaleLowerCase().startsWith(name))
    return dispatch({type: GET_PRODUCT_BY_NAME, payload: filtered})
}
import axios from 'axios';

export const GET_PRODUCTS = 'GET_USERS'

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
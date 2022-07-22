import axios from 'axios';

export const GET_PRODUCTS = 'GET_USERS'
export const GET_DETAIL = 'GET_DETAIL'
export const CLEANER = 'CLEANER'


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

export function getDetail(id) {
    return async function(dispatch) {
        const json = await axios(`https://dummyjson.com/products/${id}`)
        const data = await json.data   
        return dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }    
}

// export function cleaner(){
//     return {
//         type: CLEANER
//     }
// }

import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'
export const GET_DETAIL = 'GET_DETAIL'
export const CLEANER = 'CLEANER'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const PAGINACION = 'PAGINACION'


export function getProducts() {
    return async function(dispatch) {
        const json = await axios('http://localhost:3001/products')
        const data = await json.data
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
}

export function getProductByName(name) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/products?name=${name}`)
        const data = json.data
        return dispatch({
            type: GET_PRODUCT_BY_NAME,
            payload: data
        })
    }
}
    
export function getDetail(id) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/product/${id}`)
        const data = await json.data   
        return dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }   
} 


export function cleaner(){
    return {
        type: CLEANER
    }
}


///////////////////////////////////   POSTS     ///////////////////////////////////////////

export function createProduct(payload) {
    return async function(dispatch) {
        const json = await axios.post(`http://localhost:3001/products/`, payload)
        const data = await json.data   
        return dispatch({
            type: CREATE_PRODUCT,
            payload: data
        })
    }   
} 

/////////////////////////////////////////////////////////////////////////////////////////
export function paginacion(payload) {
    return async function(dispatch) {
        return dispatch({
            type: PAGINACION,
            payload: payload
        })
    }
}

import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'
export const GET_DETAIL = 'GET_DETAIL'
export const CLEANER = 'CLEANER'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const PAGINACION = 'PAGINACION'
export const GET_FILTER_PRICE = 'GET_FILTER_PRICE' 
export const GET_FILTER_BRAND = 'GET_FILTER_BRAND' 
export const GET_ORDER_BY_NAME = 'GET_ORDER_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES' 


export function getProducts() {
    return async function(dispatch) {
        const json = await axios('http://localhost:3001/products');
        const data = await json.data;
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    };
};

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

export function getOrderByName(order) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/products/orderByName?order=${order}`)
        const data = await json.data   
        return dispatch({
            type: GET_ORDER_BY_NAME,
            payload: data
        })
    }
}

export function getFilterBrand(brand) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/products/brand?name=${brand}`)
        const data = await json.data  
        return dispatch({
            type: GET_FILTER_BRAND,
            payload: data
        })
    }
}

export function getFilterPrice(order, min, max) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/products/price?order=${order}&min=${min}&max=${max}`)
        const data = await json.data  
        return dispatch({
            type: GET_FILTER_PRICE,
            payload: data
        })
    }   
} export function getCategories(categories) {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/products/categories?cat=${categories}`)
        const data = json.data
        return dispatch({
            type: GET_CATEGORIES,
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

import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'
export const GET_DETAIL = 'GET_DETAIL'
export const BAN_USER = 'BAN_USER'
export const UPGRADE_USER = 'UPGRADE_USER'
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const CLEANER = 'CLEANER'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const PAGINACION = 'PAGINACION'
export const GET_USER_BY_EMAIL = 'GET_USER_BY_EMAIL'
export const GET_FILTER_PRICE = 'GET_FILTER_PRICE' 
export const GET_FILTER_BRAND = 'GET_FILTER_BRAND' 
export const GET_ORDER_BY_NAME = 'GET_ORDER_BY_NAME'
export const GET_CATEGORIES = 'GET_CATEGORIES' 
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES' 
export const GET_FILTERS = 'GET_FILTERS'
export const GET_CATE = 'GET_CATE'
export const LOGIN_USER = 'LOGIN_USER'


export function getProducts(loc) {
    return async function (dispatch) {
        let json = '';
        loc ? json = await axios(`http://localhost:3001/products?name=${loc}`) :
            json = await axios('http://localhost:3001/products');
        const data = await json.data;
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    };
};

export function getProductByName(name) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/products?name=${name}`)
        const data = json.data
        return dispatch({
            type: GET_PRODUCT_BY_NAME,
            payload: data
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/product/${id}`)
        const data = json.data
        return dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }
}
export function getUsers() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/user/`)
        const data = json.data
        return dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    }
}
export function getUserByEmail(email) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/user/${email}`)
        const data = json.data
        return dispatch({
            type: GET_USER_BY_EMAIL,
            payload: data
        })
    }
}

export function getFilters(category) {
    return async function (dispatch) {
        const { data } = await axios.post('http://localhost:3001/products/filter', (category))
        return dispatch({
            type: GET_FILTERS,
            payload: data
        })
    }
}
export function banUser(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/admin/ban', (body))
        return dispatch({
            type: BAN_USER,
            payload: data
        })
    }
}
export function upgradeToAdmin(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/admin/upgrade', (body))
        return dispatch({
            type: UPGRADE_USER,
            payload: data
        })
    }
}

export function getCate() {
    return async function (dispatch) {
        const json = await axios('http://localhost:3001/categories')
        const data = json.data
        return dispatch({
            type: GET_CATE,
            payload: data
        })
    }
}
export function getAllCategories() {
    return async function(dispatch) {
        const json = await axios(`http://localhost:3001/categories`)
        const data = json.data
        return dispatch({
            type: GET_ALL_CATEGORIES,
            payload: data
        })
    }
}

export function cleaner() {
    return {
        type: CLEANER
    }
}

export function loginUser () {
    return async function (dispatch) {
        const json = await axios('http://localhost:3001/',);
        const data = json.data
        console.log(data)
        return dispatch({
            type: LOGIN_USER,
            payload: data
        })
    }
}

///////////////////////////////////   POSTS     ///////////////////////////////////////////

export function createProduct(payload) {
    return async function (dispatch) {
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
    return async function (dispatch) {
        return dispatch({
            type: PAGINACION,
            payload: payload
        })
    }
}

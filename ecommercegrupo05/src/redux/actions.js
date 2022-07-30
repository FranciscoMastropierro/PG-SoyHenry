import axios from 'axios';
import swal from 'sweetalert';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'
export const GET_DETAIL = 'GET_DETAIL'
export const CLEANER = 'CLEANER'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const PAGINACION = 'PAGINACION'
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

export function getFilters(category) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:3001/products/filter', (category))
            return dispatch({ type: GET_FILTERS, payload: data })
        }
        catch (error) {
            return swal({
                title: "No existen resultados para este filtro.",
                input: "text",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                buttons: {
                    cancel: 'ok'
                }
            })
        }
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

export function cleaner() {
    return {
        type: CLEANER
    }
}

export function loginUser() {
    return async function (dispatch) {
        const json = await axios.get('http://localhost:3001/login');
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

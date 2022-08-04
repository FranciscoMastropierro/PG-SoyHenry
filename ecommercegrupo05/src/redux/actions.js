import axios from 'axios';
import swal from 'sweetalert';

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
// export const SET_PROFILE = 'SET_PROFILE'
export const TOKEN = 'TOKEN'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'
export const TOTAL_PRICE = 'TOTAL_PRICE'
export const GET_PRODUCTS_CART = 'GET_PRODUCTS_CART'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'



export function getProducts(loc) {
    return async function (dispatch) {
        let json = '';
        loc ? json = await axios(`http://localhost:3001/api/products?name=${loc}`) :
            json = await axios('http://localhost:3001/api/products');
        const data = await json.data;
        return dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    };
};

export function getProductByName(name) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/products?name=${name}`)
        const data = json.data
        return dispatch({
            type: GET_PRODUCT_BY_NAME,
            payload: data
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/product/${id}`)
        const data = json.data
        return dispatch({
            type: GET_DETAIL,
            payload: data
        })
    }
}
export function getUsers() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/user/`)
        const data = json.data
        return dispatch({
            type: GET_ALL_USERS,
            payload: data
        })
    }
}
export function getUserByEmail(email) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/user/${email}`)
        const data = json.data
        return dispatch({
            type: GET_USER_BY_EMAIL,
            payload: data
        })
    }
}

export function getFilterBrand() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/products/brand/all`)
        const data = json.data
        return dispatch({
            type: GET_FILTER_BRAND,
            payload: data
        })
    }
}

export function getFilters(category) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:3001/api/products/filter', (category))
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

export function banUser(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/api/admin/ban', (body))
        return dispatch({
            type: BAN_USER,
            payload: data
        })
    }
}
export function updateProduct(id, update) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/products/', ({id, update}))
        return dispatch({
            type: UPDATE_PRODUCT,
            payload: data
        })
    }
}
export function upgradeToAdmin(body) {
    return async function (dispatch) {
        const { data } = await axios.get('http://localhost:3001/api/admin/upgrade', (body))
        return dispatch({
            type: UPGRADE_USER,
            payload: data
        })
    }
}

export function getCate() {
    return async function (dispatch) {
        const json = await axios('http://localhost:3001/api/categories')
        const data = json.data
        return dispatch({
            type: GET_CATE,
            payload: data
        })
    }
}

export function getAllCategories() {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/categories`)
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

// export function setProfile(u) {
//     return async function (dispatch) {

//         const { data } = await axios('http://localhost:3001/api/users/')
//         const found = data.find(user => user.email === u.email)

//         if(!found) {
//             u = {
//                 firstname: u.given_name,
//                 lastname: u.family_name || ' ',
//                 email: u.email,
//                 picture: u.picture || null,
//                 }
//             const posted = await postProfile(u)
//             return dispatch ({
//                 type: SET_PROFILE,
//                 payload: posted
//             })
//         } else {
//             return dispatch ({
//                 type: SET_PROFILE,
//                 payload: found
//             })
//         }
//     }
// }

export function getTotalPrice(payload) {
    return {
        type: TOTAL_PRICE,
        payload: payload
    }
}

<<<<<<< HEAD
export function token(tok, user) { 
    return async function (dispatch) {
        console.log("Flag Actions", tok)
        console.log("Flag Actions user", user)
        const { data } = await axios.post('http://localhost:3001/profile',user,
            {
                headers: {
                    'Authorization': `Bearer ${tok}`,
                    'userInfo': user
=======
export function getProductCart(payload) {
    return {
        type: GET_PRODUCTS_CART,
        payload: payload
    }
}
///////////////////////////////////   POSTS     ///////////////////////////////////////////



// export async function postProfile (u) {
//         const { data } = await axios.post(`http://localhost:3001/api/users/`, u)
//         return data
// }

export function token(tok, user) { 
    return async function (dispatch) {
        
        const { data } = await axios.post('http://localhost:3001/api/profile',user,
            {
                headers: {
                    'Authorization': `Bearer ${tok}`
>>>>>>> develop
                }
            }
        )
        
        return dispatch({ type: TOKEN, payload: data })
    }
}

export function crateComment(comment) {
    return async function (dispatch) {
        const { data } = await axios.post('http://localhost:3001/api/commentary', (comment))
        return dispatch({ type: CREATE_COMMENT, payload: data })
    }
}

export function getComments(id) {
    return async function (dispatch) {
        const json = await axios(`http://localhost:3001/api/commentary?productId=${id}`)
        const data = json.data
        return dispatch({
            type: GET_COMMENTS,
            payload: data
        })
    }
}

///////////////////////////////////   POSTS     ///////////////////////////////////////////

export function createProduct(payload) {
    return async function (dispatch) {
        const json = await axios.post(`http://localhost:3001/api/products/`, payload)
        const data = await json.data
        return dispatch({
            type: CREATE_PRODUCT,
            payload: data
        })
    }
}

//////////////////////////////////////   PUTS   /////////////////////////////////////////

export function changeProfile(id) {
    return async function (dispatch) {
        const { data } = await axios.put('http://localhost:3001/api/users/edit/')
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

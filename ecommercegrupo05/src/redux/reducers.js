import {
    UPDATE_STOCK,
    POST_FAVORITE,
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_DETAIL,
    CLEANER,
    CREATE_PRODUCT,
    PAGINACION,
    BAN_USER,
    UPGRADE_USER,
    GET_ALL_CATEGORIES,
    GET_USER_BY_EMAIL,
    GET_FILTERS,
    GET_CATE,
    GET_ALL_USERS,
    GET_ALL_USERS_ORDER,
    //SET_PROFILE,
    CHANGE_PROFILE,
    TOKEN,
    UPDATE_PRODUCT,
    TOTAL_PRICE,
    GET_PRODUCTS_CART,
    DELETE_PRODUCT,
    UPDATE_ROL,
    GET_COMMENTS,
    GET_FILTER_BRAND,
    GET_MSG_CART
} from './actions'

const initialState = {
    data: [],
    copyData: [],
    searchedProducts: [],
    detail: [],
    clean: [],
    productsPerPage: 15,
    pages: 0,
    productsToRender: [],
    filterPrice: [],
    categories: [],
    allCategories: [],
    allUsers: [],
    searchedUser: [],
    laptos: [],
    filters: [],
    filterBrands: [],
    cate: [],
    token: [],
    totalPrice: 0,
    productsCart: [],
    commentsUser: [],
    UserOrders:[],
    userLoged: {},
    msgCart: '',
}

function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload,
                copyData: payload,
            }
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                searchedProducts: payload
            }
        case GET_ALL_USERS_ORDER:
            return {
                ...state,
                UserOrders: payload
            }
        case CREATE_PRODUCT:
            return {
                ...state,
            }
        case UPDATE_STOCK:
            return {
                ...state,
            }
        case POST_FAVORITE:
            return {
                ...state,
            }
        case BAN_USER:
            return {
                ...state,
            }
        case UPDATE_ROL:
            return {
                ...state,
            }
        case UPGRADE_USER:
            return {
                ...state,
            }
        case DELETE_PRODUCT:
            return {
                ...state,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: payload
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
            }
        case GET_USER_BY_EMAIL:
            return {
                ...state,
                searchedUser: payload,
            };
        case GET_ALL_USERS:
            return {
                ...state,
                allUsers: payload
            }
        case CLEANER:
            return {
                ...state,
                detail: []
            }
        case PAGINACION:
            return {
                ...state,
                productsToRender: state.data.slice(payload, payload + state.productsPerPage)
            }
        case GET_FILTERS:
            return {
                ...state,
                data: payload,
                filters: payload,
                laptos: payload,
            }
        case GET_FILTER_BRAND:
            return {
                ...state,
                filterBrands: payload
            }
        case GET_CATE:
            return {
                ...state,
                cate: payload
            }
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                allCategories: payload,
            }
        case TOKEN:
            return {
                ...state,
                userLoged: payload
            }
        case TOTAL_PRICE:
            return {
                ...state,
                totalPrice: payload
            }
        case GET_PRODUCTS_CART:
            return {
                ...state,
                productsCart: payload
            }
        case GET_COMMENTS:
            return {
                ...state,
                commentsUser: payload
            }
        case GET_MSG_CART:
            return {
                ...state,
                msgCart: payload
            }
        default: return state;
    }
}


export default rootReducer;
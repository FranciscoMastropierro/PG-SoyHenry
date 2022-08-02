import {
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
    SET_PROFILE,
    TOKEN
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
    cate: [],
    profile: [],
    userLoged: {},

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
        case CREATE_PRODUCT:
            return {
                ...state,
            }
        case BAN_USER:
            return {
                ...state,
            }
        case UPGRADE_USER:
            return {
                ...state,
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: payload
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
        case SET_PROFILE:
            return {
                ...state,
                profile: payload
            }
         case TOKEN:
            return {
                 ...state,
                 userLoged: payload
            }
        default: return state;
        }
    }


export default rootReducer;
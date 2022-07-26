import {
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_DETAIL,
    CLEANER,
    CREATE_PRODUCT,
    PAGINACION,    
    GET_CATEGORIES,    
    GET_FILTERS,
    GET_CATE
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
    laptos: [],    
    filters: [],
    cate: []
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

        case GET_DETAIL:
            return {
                ...state,
                detail: payload
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
                filters: payload,
                laptos: payload,
            }
        case GET_CATE:
            return {
                ...state,               
                cate: payload
            }
        default: return state;
    }
}

export default rootReducer;
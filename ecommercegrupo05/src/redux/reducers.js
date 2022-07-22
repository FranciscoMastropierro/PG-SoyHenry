import { GET_PRODUCTS, GET_PRODUCT_BY_NAME, GET_DETAIL, CLEANER, PAGINACION  } from './actions'

const initialState = {
    data: [],
    searchedProducts: [],
    detail: [],
    clean: [],
    productsPerPage: 15,
    pages: 0,
    productsToRender: []
}

function rootReducer(state = initialState, {type, payload}) {
    switch(type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload
            };
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                searchedProducts: payload
            };
        case GET_DETAIL:
            return {
                ...state,
                detail: payload
            };
        case CLEANER:
            return {
                ...state,
                clean: []
            };
        case PAGINACION:
            return {
                ...state,
                productsToRender: state.data.slice(payload, payload + state.productsPerPage)
            };
            default: return state;
    }
}

export default rootReducer;
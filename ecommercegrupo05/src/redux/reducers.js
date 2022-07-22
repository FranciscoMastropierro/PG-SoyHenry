import { GET_PRODUCTS, GET_PRODUCT_BY_NAME, GET_DETAIL, CLEANER, CREATE_PRODUCT } from './actions'

const initialState = {
    data: [],
    searchedProducts: [],
    detail: [],
    clean: []
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
                clean: []
        }
            default: return state;
    }
}

export default rootReducer;
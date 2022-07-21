import { GET_PRODUCTS, GET_PRODUCT_BY_NAME } from './actions'

const initialState = {
    data: [],
    searchedProducts: []
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
            default: return state;
    }
}

export default rootReducer;
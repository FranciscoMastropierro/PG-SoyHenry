import { GET_PRODUCTS, GET_PRODUCT_BY_NAME, GET_DETAIL, CLEANER  } from './actions'

const initialState = {
    data: [],
    searchedProducts: [],
    detail: []
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
            case GET_DETAIL:
                return {
                  ...state,
                  detail: payload
                }
                // case CLEANER:
                // return {
                //   ...state,
                //   detail: []
                // }
            default: return state;
    }
}

export default rootReducer;
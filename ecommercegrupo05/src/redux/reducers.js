import { GET_PRODUCTS } from './actions'

const initialState = {
    data: []
}

function rootReducer(state = initialState, {type, payload}) {
    switch(type) {
        case GET_PRODUCTS:
            return {
                ...state,
                data: payload
            }
            default: return state;
    }
}

export default rootReducer;
import { SHOW_DEUDAS } from '../actions'

const initialState = {
    data: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_DEUDAS:
            return Object.assign({}, state, { data: action.payload });
        default:
            return state;
    }
}
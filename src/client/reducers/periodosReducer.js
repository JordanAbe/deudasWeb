import { SHOW_PERIODOS } from '../actions'

const initialState = {
    data: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_PERIODOS:
            return Object.assign({}, state, { data: action.payload });
        default:
            return state;
    }
}
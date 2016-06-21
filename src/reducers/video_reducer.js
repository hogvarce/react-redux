import { FETCH_VIDEOS } from '../actions';
import { SELECT_VIDEO } from '../actions';

const INITIAL_STATE = { all: [], select: {} };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_VIDEOS:
            return { ...state, all: action.payload.data, select: action.payload.data.items[0] };
        case SELECT_VIDEO:
            return {...state, select: action.payload}
        default:
            return state;
    }
}

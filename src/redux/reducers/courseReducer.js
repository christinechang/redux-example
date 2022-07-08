import * as types from "../actions/actionTypes";

export default function courseReducer(state=[], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            return[...state, {...action.course }]; // don't push. need to create new array
        default:
            return state;
    }
}
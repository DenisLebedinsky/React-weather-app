import {FETCH_LOCATION_FIND_SUCCESS} from './../actions/actionTypes';
const initialState = {
    city:[]
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_LOCATION_FIND_SUCCESS:
            return Object.assign({}, state, {
                city: payload
            });
        default:
            return state
    }
}
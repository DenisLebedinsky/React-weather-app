import {SET_CURRENT_LOCATION} from './../actions/actionTypes';

const initialState = "";

//передаем в стейт новую текущую локацию
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CURRENT_LOCATION:
            return payload;
        default:
            return state
    }
}
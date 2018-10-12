import {FETCH_WEATHER_CURRENT_LOCATION_SUCCESS} from './../actions/actionTypes';

const initialState = {};

//сохранение, обновление прогноза
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_WEATHER_CURRENT_LOCATION_SUCCESS:
            return payload;
        default:
            return state
    }
}
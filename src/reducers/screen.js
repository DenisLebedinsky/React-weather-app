import {SWITCH_SCREEN_FAVORITES, SWITCH_SCREEN_FORECAST, SWITCH_SCREEN_SEARCH} from './../actions/actionTypes';

const initialState = {
    serch: true,
    fav: false,
    forecast: false
};

//управление активным экраном
export default (state = initialState, {type}) => {
    switch (type) {
        case SWITCH_SCREEN_SEARCH:
            return {
                serch: true,
                fav: false,
                forecast: false
            };
        case SWITCH_SCREEN_FAVORITES:
            return {
                serch: false,
                fav: true,
                forecast: false
            };
        case SWITCH_SCREEN_FORECAST:
            return {
                serch: false,
                fav: false,
                forecast: true
            };
        default:
            return state
    }
}
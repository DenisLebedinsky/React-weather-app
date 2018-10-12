import {
    FETCH_LOCATION_FIND_START,
    FETCH_LOCATION_FIND_SUCCESS,
    FETCH_LOCATION_FIND_FAILURE,
    ADD_TO_FAVORITES,
    DELL_FROM_FAVORITES,
    SWITCH_SCREEN_FAVORITES,
    SWITCH_SCREEN_FORECAST,
    SWITCH_SCREEN_SEARCH,
    SET_CURRENT_LOCATION,
    FETCH_WEATHER_CURRENT_LOCATION_SUCCESS,
    FETCH_WEATHER_CURRENT_LOCATION_FAILURE,
    FETCH_WEATHER_CURRENT_LOCATION_START
} from './actionTypes'
import {findLocationApi, findWratherCurrentLocationAPI} from './../api/api'

//запрашиваем список городов из апи
export const fetchfindlocation = (stext) => async dispatch => {
    dispatch({type: FETCH_LOCATION_FIND_START});
    try {
        const loc = await findLocationApi(stext);
        dispatch({
            type: FETCH_LOCATION_FIND_SUCCESS,
            payload: loc
        })
    } catch (err) {
        dispatch({
            type: FETCH_LOCATION_FIND_FAILURE,
            payload: err,
            error: true
        })
    }
};

//запрос погоды по определенному городу
export const fetchWeatherCurrentLocation = (id) => async dispatch => {
    dispatch({type: FETCH_WEATHER_CURRENT_LOCATION_START});
    try {
        const loc = await findWratherCurrentLocationAPI(id);
        dispatch({
            type: FETCH_WEATHER_CURRENT_LOCATION_SUCCESS,
            payload: loc
        })
    } catch (err) {
        dispatch({
            type: FETCH_WEATHER_CURRENT_LOCATION_FAILURE,
            payload: err,
            error: true
        })
    }
};

//добавление города по id в избранное
export const addToFavorites = (locId) => dispatch => {
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: locId
    });
};

//удаление города по id из избранного
export const dellfromFavorites = (locId) => dispatch => {
    dispatch({
        type: DELL_FROM_FAVORITES,
        payload: locId
    });
};

//перейти на экран поиск
export const switchToSearch = () => dispatch => {
    dispatch({type: SWITCH_SCREEN_SEARCH});
};

//перейти на экран избранное
export const switchToFavorites = () => dispatch => {
    dispatch({type: SWITCH_SCREEN_FAVORITES});
};

//перейти на экран прогноз
export const switchToForecast = () => dispatch => {
    dispatch({type: SWITCH_SCREEN_FORECAST});
};

//установить текущий выбранный город
export const setCurrentLocation = (locID) => dispatch => {
    dispatch({
        type: SET_CURRENT_LOCATION,
        payload: locID
    });
};


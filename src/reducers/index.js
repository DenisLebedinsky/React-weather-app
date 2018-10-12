import {combineReducers} from 'redux'
import location from './location'
import favorites from './favorites'
import workscreen from './screen'
import currentLocation from './currentLocation'
import weather from './weather'
export default combineReducers({
    location,
    favorites,
    currentLocation,
    workscreen,
    weather
})
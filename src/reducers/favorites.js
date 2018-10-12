import {ADD_TO_FAVORITES,DELL_FROM_FAVORITES} from './../actions/actionTypes';
const fromlocal = JSON.parse(localStorage.getItem('favorites'));
console.log('local',fromlocal);
const initialState = {
    fav: fromlocal ? fromlocal: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_FAVORITES:
            const newState = Object.assign({}, state);
            if(payload) {
                if((! newState.fav.some((woeid) => woeid === payload.woeid))){
                    if (newState.fav[0] == null){
                        newState.fav = [payload];
                    } else {
                        newState.fav.push(payload);
                    }
                    localStorage.setItem('favorites', JSON.stringify(newState.fav))
                     }else{
                }
            }
            return newState;
        case DELL_FROM_FAVORITES:
            const newStateDel = JSON.parse(JSON.stringify({...state}));
            let poz= newStateDel.fav.findIndex((data)=> data.woeid === payload);
            newStateDel.fav.splice(poz,1);
            localStorage.setItem('favorites', JSON.stringify(newStateDel.fav));
            return newStateDel;
        default:
            return state
    }
}

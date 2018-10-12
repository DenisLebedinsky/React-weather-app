import React from 'react';

const  handleClickLoc=(e, id)=> {
        this.props.switchToForecast();
        this.props.setCurrentLocation(id);
};

const handleDellFavorites=(event, id)=> {
        this.props.dellfromFavorites(id);
        event.stopPropagation();
};

export const favoritesList=(stext, data, index)=>{
        return (
            <li key={index}
                className='list-group-item d-flex justify-content-between align-items-center'
                onClick={(e) => handleClickLoc(e, data.woeid)}>
                {data.title}
                <button onClick={(event) => handleDellFavorites(event, data.woeid)}
                        className='btn btn-info'
                >-
                </button>
            </li>)
};




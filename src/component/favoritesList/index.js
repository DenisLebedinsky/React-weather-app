import React, {Component} from 'react';
import {connect} from "react-redux";
import {dellfromFavorites, setCurrentLocation, switchToForecast} from "../../actions/action";


class FavoritesList extends Component {
    //переход к экрану прогноз и запрос данных по городу
    handleClickLoc = (e, id) => {
        this.props.switchToForecast();
        this.props.setCurrentLocation(id);
    };

    //удаление из избранного и предотвращение всплытия
    handleDellFavorites = (event, id) => {
        this.props.dellfromFavorites(id);
        event.stopPropagation();
    };

    render() {
        return (
            <li
                className='list-group-item d-flex justify-content-between align-items-center'
                onClick={(e) => this.handleClickLoc(e, this.props.data.woeid)}>
                {this.props.data.title}
                <button onClick={(event) => this.handleDellFavorites(event, this.props.data.woeid)}
                        className='btn btn-info'
                >-
                </button>
            </li>)
    }
}

const mapDispatchToProps = {
    dellfromFavorites,
    setCurrentLocation,
    switchToForecast
};

export default connect(null, mapDispatchToProps)(FavoritesList)


import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToFavorites, fetchfindlocation, setCurrentLocation, switchToForecast} from "../../actions/action";

class Citylist extends Component {
    //добавить в избранное
    handleAddFavorites(e, loc) {
        e.target.disabled = true;
        this.props.addToFavorites(loc);
        e.stopPropagation();

    }
    //перейти к прогнозу, и запросить данные по городу
    handleClickLoc(e, id) {
        this.props.switchToForecast();
        this.props.setCurrentLocation(id);

    }

    render() {
        return (<li
            className='list-group-item d-flex justify-content-between align-items-center'
            onClick={(e) => this.handleClickLoc(e, this.props.loc.woeid)}>
            {this.props.loc.title}
            <button onClick={(e) => this.handleAddFavorites(e, this.props.loc)}
                    className='btn btn-warning'
                    /*если в избранном кнопка не активна*/
                    disabled={this.props.fav.some((data) => data.woeid === this.props.loc.woeid)}
            >+
            </button>
        </li>)
    }
}

const mapStateToProps = state => {
    return {
        fav: state.favorites.fav
    }
};


const initMapStateToProps = {
    addToFavorites,
    fetchfindlocation,
    switchToForecast,
    setCurrentLocation
};

export default connect(mapStateToProps, initMapStateToProps)(Citylist)
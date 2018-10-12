import React,{Component} from 'react';
import {connect} from 'react-redux'
import {addToFavorites} from "../../actions/action";

class Citylist extends Component{

    handleAddFavorites(e,loc){
        //let loc = this.props.locations[event.target.value];
        e.target.disabled = true;
        this.props.addToFavorites(loc);
        e.stopPropagation();

    }

    handleClickLoc(e, id){
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
                    disabled={this.props.fav.some((data) => data.woeid === this.props.loc.woeid)}
            >+
            </button>
        </li>)
    }
}
const mapStateToProps = state =>  {
    return {
        fav:state.favorites.fav
    }
};


const initMapStateToProps ={
    addToFavorites
};

export default connect(mapStateToProps, initMapStateToProps)(Citylist)
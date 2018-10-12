import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchfindlocation,addToFavorites,switchToForecast,setCurrentLocation} from './../../actions/action'
import './style.css'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            stext: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let newtext = event.target.value.replace(/[^a-z\s]+/ig, "");
        this.setState({stext:newtext});
    }

    handleAddFavorites(e,loc){
        //let loc = this.props.locations[event.target.value];
        e.target.disabled = true;
        this.props.addToFavorites(loc);
      e.stopPropagation();

    }

    handleSubmit(event) {
        this.props.fetchfindlocation(this.state.stext);
        event.preventDefault();
    }

    handleClickLoc(e, id){
        this.props.switchToForecast();
        this.props.setCurrentLocation(id);

    }

    render() {
        const list = this.props.locations.map((loc,index)=>{
            return <li key={index}
                       className='list-group-item d-flex justify-content-between align-items-center'
                       onClick={(e)=> this.handleClickLoc(e, loc.woeid)}>
                {loc.title}
                <button onClick={(e)=>this.handleAddFavorites(e,loc)}
                        className='btn btn-warning'
                        disabled={this.props.fav.some((data) => data.woeid === loc.woeid)}
                >+
                </button>
            </li>
        });
        return (
            <div className='container animated fadeInLeft'>
                <div className='row'>
                    <div className=' m-auto col-lg-8'>
                        <h3>Search</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group m-auto">
                                <input type="text"
                                       className="form-control"
                                       placeholder="City name"
                                       value={this.state.stext}
                                       onChange={this.handleChange}
                                       />
                                    <div className="input-group-append">
                                        <input type="submit"
                                               className="btn btn-outline-secondary"
                                               value="Search"
                                               onClick={this.handleSubmit}
                                        />
                                    </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='row'>
            <div className='d-flex m-auto col-lg-8 '>
                <ul className='list-group col-lg-12 list_group'>
                 {list}
                 </ul>
             </div>
                </div>
        </div>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        locations:state.location.city,
        fav:state.favorites.fav
    }
};

const mapDispatchToProps = {
    fetchfindlocation,
    addToFavorites,
    switchToForecast,
    setCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
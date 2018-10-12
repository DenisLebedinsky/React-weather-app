import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchfindlocation, switchToForecast, setCurrentLocation} from './../../actions/action'
import './style.css'
import Citylist from './../../component/cityList'
import {getlocations, getfavorites} from './../../selectors'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stext: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//валидация некорректных символов введенных пользователем
    handleChange(event) {
        let newtext = event.target.value.replace(/[^a-z\s]+/ig, "");
        this.setState({stext: newtext});
    }

//поиск по списку избранных городов
    handleSubmit(event) {
        this.props.fetchfindlocation(this.state.stext);
        event.preventDefault();
    }

    render() {
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
                            {this.props.locations.map((loc, index) => <Citylist loc={loc} key={index}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        locations: getlocations(state),
        fav: getfavorites(state)
    }
};

const mapDispatchToProps = {
    fetchfindlocation,
    switchToForecast,
    setCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)
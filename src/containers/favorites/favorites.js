import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dellfromFavorites, switchToForecast, setCurrentLocation} from './../../actions/action'
import {getfavorites} from "../../selectors";
import FavoritesList from './../../component/favoritesList'

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
//валидация некорректных символов введенных пользователем
    handleChange(event) {
        let newtext = event.target.value.replace(/[^a-z\s]+/ig, "");
        this.setState({text: newtext});
    }

    render() {
        return (
            <div className="container animated fadeInUp">
                <div className='row'>
                    <div className='col-lg-12'>
                        <h3>Favorites</h3>
                        <div className="input-group m-auto col-6">
                            <input type="text"
                                   value={this.state.text}
                                   onChange={this.handleChange}
                                   placeholder="city name"
                                   className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 m-auto'>
                        <ul className='list-group list_group'>
                            {this.props.fav.map((data, index) => ((data && ~data.title.toLowerCase().indexOf(this.state.text.toLowerCase())) || this.state.text === '') ?
                                <FavoritesList text={this.state.text} data={data} key={index}/> : null)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fav: getfavorites(state)
    }
};

const mapDispatchToProps = {
    dellfromFavorites,
    setCurrentLocation,
    switchToForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
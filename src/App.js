import React, {Component} from 'react';
import './App.css';
import Search from './containers/search/search'
import Favorites from './containers/favorites/favorites'
import Forecast from './containers/weatherForecast/forecast'
import {connect} from 'react-redux'
import {switchToFavorites, switchToSearch} from './actions/action'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick_serch = this.handleClick_serch.bind(this);
        this.handleClick_fav = this.handleClick_fav.bind(this);

    }

//кнопка навбара перейти на экран поиска
    handleClick_serch(e) {
        e.preventDefault();
        this.props.switchToSearch();

    }

    //кнопка навбара перейти на экран избранного
    handleClick_fav(e) {
        e.preventDefault();
        this.props.switchToFavorites();
    }

//в зависимоти от данных переданных из стора отображает поределенный экран
    render() {
        return (
            <div className="App">
                <nav className="navbar fixed-top navbar-light bg-light">
                    <div className='container'>
                        <ul className="navbar-nav m-auto  d-flex flex-row">
                            <li className="nav-item ml-4">
                                <a href='/'
                                   className="nav-link"
                                   onClick={this.handleClick_serch}>
                                    Search
                                </a>
                            </li>
                            <li className="nav-item ml-4">
                                <a href='/'
                                   className="nav-link"
                                   onClick={this.handleClick_fav}>
                                    Favorites
                                </a>
                            </li>

                        </ul>
                    </div>
                </nav>
                <div className="work_place">
                    {this.props.workscreen.fav ? <Favorites/> : (this.props.workscreen.forecast ? <Forecast/> :
                        <Search/>)}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        workscreen: state.workscreen
    })
};

const mapDispatchToProps = {
    switchToFavorites,
    switchToSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

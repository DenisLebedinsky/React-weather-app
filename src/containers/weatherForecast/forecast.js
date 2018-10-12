import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeatherCurrentLocation} from './../../actions/action'
import './style.css';
import {forcastDay} from './../../component/forcastDay'

class Forecast extends Component {
    componentDidMount() {
        this.props.fetchWeatherCurrentLocation(this.props.currentLoc);
    }
//рендерит город и погоду по дням
    render() {
        return (
            <div className='container'>
                {(this.props.data.consolidated_weather) ? (
                    <div className="row weather weather-sml">

                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                            <h2>
                                {this.props.data.title}
                            </h2>
                            <p>
                                {new Date(this.props.data.time).getHours()}:{new Date(this.props.data.time).getMinutes()}
                                <br/>
                                Updated {new Date().getHours() - new Date(this.props.data.time).getHours()} hours,
                                {new Date().getMinutes() - new Date(this.props.data.time).getMinutes()} minutes ago
                            </p>
                        </div>
                        {this.props.data.consolidated_weather.map((date, i) => forcastDay(date, i))}
                    </div>
                ) : <div>Загрузка...</div>

                }
            </div>
        )
    }
}

const mapStateToProps = state =>  {
    return {
        currentLoc:state.currentLocation,
        data:state.weather
    }
};

const mapDispatchToProps = {
    fetchWeatherCurrentLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeatherCurrentLocation} from './../../actions/action'
import './style.css'

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.note = this.note.bind(this);
    }

    componentDidMount() {
        this.props.fetchWeatherCurrentLocation(this.props.currentLoc);
    }

    note =(date, i)=> {
        const convertDirection = (deg) => {
            if (deg > 11.25 && deg < 33.75) {
                return "NNE";
            } else if (deg > 33.75 && deg < 56.25) {
                return "ENE";
            } else if (deg > 56.25 && deg < 78.75) {
                return "E";
            } else if (deg > 78.75 && deg < 101.25) {
                return "ESE";
            } else if (deg > 101.25 && deg < 123.75) {
                return "ESE";
            } else if (deg > 123.75 && deg < 146.25) {
                return "SE";
            } else if (deg > 146.25 && deg < 168.75) {
                return "SSE";
            } else if (deg > 168.75 && deg < 191.25) {
                return "S";
            } else if (deg > 191.25 && deg < 213.75) {
                return "SSW";
            } else if (deg > 213.75 && deg < 236.25) {
                return "SW";
            } else if (deg > 236.25 && deg < 258.75) {
                return "WSW";
            } else if (deg > 258.75 && deg < 281.25) {
                return "W";
            } else if (deg > 281.25 && deg < 303.75) {
                return "WNW";
            } else if (deg > 303.75 && deg < 326.25) {
                return "NW";
            } else if (deg > 326.25 && deg < 348.75) {
                return "NNW";
            } else {
                return "N";
            }
        };

        return (
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 animated fadeInDown group_weather"  key={i}>
                <h4>
                    {(new Date(date.applicable_date).getDay() === new Date().getDay()) ? ('Today') : (
                        (new Date(date.applicable_date).getDay() - new Date().getDay() === 1) ? ('Tomorrow') :
                            (new Date(date.applicable_date)).toString().substring(0, 11)
                    )}
                </h4>
                <dl>
                    <dd className="weatherstate d-flex justify-content-center">
                        <div className={`state-icon-sml state-${date.weather_state_abbr}`}> </div>
                        <span className="hidden-xs hidden-sm">{date.weather_state_name} </span>
                    </dd>
                    <dd>
                        Max: {parseInt(date.max_temp)}°C<br/>
                        Min: {parseInt(date.min_temp)}°C
                    </dd>
                    <dd className="wind">
                        <span className={`dir dir-${convertDirection(date.wind_direction)}`}
                              title={convertDirection(date.wind_direction)}> </span>
                        {parseInt(date.wind_speed)} mph
                    </dd>
                </dl>
            </div>
        )
    };

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

                        {this.props.data.consolidated_weather.map((date, i) => this.note(date, i))}
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
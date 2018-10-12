import {convertDirection} from "../../selectors";
import React from 'react';

export const forcastDay =(date, i)=> {


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
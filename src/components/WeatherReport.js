import React, { useState } from 'react';
import useWeatherDebounce from '../hooks/useWeatherDebounce.js';

//---------------------------------------------------------------------------------------
//                                  WEATHER COMPONENT
//---------------------------------------------------------------------------------------

const WeatherReport = ({ chosenLocation }) => {

    const [ weatherData, setWeatherData ] = useState(null);
    const [ error, setError ] = useState(null);

//---------------------------------------------------------------------------------------
//                             HOOK FOR DEBOUNCING API CALLS
//---------------------------------------------------------------------------------------
    
    useWeatherDebounce(

        chosenLocation,
        500,
        (data) => {

            console.log('Weather has been captured successfully: ', data);
            setWeatherData(data);
            setError(null);

        },

        (err) => {

            console.log('Error fetching weather data: ', err);
            setError(err);
            setWeatherData(null);
        }
    );

//---------------------------------------------------------------------------------------
//                             ERROR STATE RENDERING
//---------------------------------------------------------------------------------------

    if (error) {

        return(

            <div>
                <p className="error-message">{error}</p>
                <button onClick={() => setError(null)} className="retry-btn">
                    Retry
                </button>
            </div>
        );

            
    }

//---------------------------------------------------------------------------------------
//                             MAIN RENDERING LOGIC
//---------------------------------------------------------------------------------------
    
    return (

        <div className = "weather-container">
            {weatherData ?( 
            <>
                <h1> WEATHER IN { weatherData.name }</h1>
                <p> TEMPERATURE: { weatherData.main.temp }</p>
                <p> CURRENT CONDITIONS: { weatherData.weather[0].description }</p>
                <img
                    src = {`http://openweathermap.org/img/wn/${weatherData.weather[0].icon }.png`}
                    alt = "weather icon"
                 />
            </>
            ) : (
                    <p>...syncing with the sky...one moment...</p>
            )}
        </div>
    );
};

export default WeatherReport;
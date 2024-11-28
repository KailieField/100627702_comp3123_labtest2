import React, { useEffect, useState } from 'react';
import apiClient from '../utils/API.js';
import { API_KEY, UNIT, BASE_URL} from '../utils/constants.js';

//---------------------------------------------------------------------------------------
//                                  WEATHER COMPONENT
//---------------------------------------------------------------------------------------

const WeatherReport = ({ chosenLocation }) => {

    const [ weatherData, setWeatherData ] = useState(null);
    const [ error, setError ] = useState(null);

//---------------------------------------------------------------------------------------
//                             FETCH WEATHER DATA FROM API
//---------------------------------------------------------------------------------------
    
    useEffect(() => {

        const fetchWeather = async () => {

            try{

                const response = await apiClient.get(`${BASE_URL}/weather`, {
                    params: {
                        q: chosenLocation,
                        appid: API_KEY,
                        units: UNIT,
                    },
                });

                setWeatherData(response.data);
                setError(null);

            } catch (err) {
                console.error('---API ERROR: ', err);
                setError('--- CITY NOT FOUND.');
                setWeatherData(null);
            }
        };

            fetchWeather();
        
    }, [chosenLocation]);

//---------------------------------------------------------------------------------------
//                             ERROR STATE RENDERING
//---------------------------------------------------------------------------------------

    if (error) {

        return(

            <div style={{ color: 'red', textAlign: 'center'}}>
                <p>{error}</p>
            </div>
        );
     
    }

//---------------------------------------------------------------------------------------
//                             MAIN RENDERING LOGIC
//---------------------------------------------------------------------------------------
    if (!weatherData) {
        return <p style={{ textAlign: 'center'}}> Fetching weather data for you...</p>;
    }

    return (

        <div 
        style={{ 
            margin: '20px', 
            padding: '20px', 
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            textAlign: 'center',
            
            }}>
                <h2> WEATHER IN { weatherData.name }</h2>
                <p> TEMPERATURE: { weatherData.main.temp }</p>
                <p> CURRENT CONDITIONS: { weatherData.weather[0].description }</p>
                <img
                    src = {`http://openweathermap.org/img/wn/${weatherData.weather[0].icon }.png`}
                    alt = "weather icon"
                 />

        </div>
    );
};

export default WeatherReport;
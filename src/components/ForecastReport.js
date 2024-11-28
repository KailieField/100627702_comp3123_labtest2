import React, { useState, useEffect } from 'react';
import apiClient from '../utils/API'
import { API_KEY, UNIT } from '../utils/constants';


//---------------------------------------------------------------------------------------
//                                  FORECAST COMPONENT
//---------------------------------------------------------------------------------------


const ForecastReport = ({ chosenLocation }) => {

    const [ forecastData, setForecastData ] = useState(null);
    const [ error, setError ] = useState(null);
//---------------------------------------------------------------------------------------
//                                  FORECAST DATA FROM API
//---------------------------------------------------------------------------------------

    useEffect(() => {

        const fetchForecast = async () => {

            try{

                const response = await apiClient.get('forecast', {

                    params: {
                        q: chosenLocation,
                        appid: API_KEY,
                        units: UNIT,
                    },
                });

                setForecastData(response.data);
                setError(null);

            } catch (error) {

                console.log('Forecast API Error', error)
                setError('--- Seems we cant control the weather after all...could not fetch the data');
            }
        };

        if (chosenLocation){

            fetchForecast();

        }


    }, [ chosenLocation ]);

//---------------------------------------------------------------------------------------
//                                 CONDITIONAL RENDERING
//---------------------------------------------------------------------------------------

    if(error) {

        return <p className="error-message">{error}</p>;
    }
    if(!forecastData) {
        return <p>...loading forecast data...</p>;
    }

    return (
        <div className="forecast-container">
            <h2> 5-DAY FORECAST FOR  { forecastData.city.name }</h2>
            <ul>
                { forecastData.list.slice(0, 5).map((day, index) => (
                    <li key={ index }>
                        <p> { new Date(day.dt * 1000).toLocaleDateString() }</p>
                        <p> TEMPERATURE: { day.main.temp } CELCIUS</p>
                        <p> {day.weather[0].description }</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForecastReport;
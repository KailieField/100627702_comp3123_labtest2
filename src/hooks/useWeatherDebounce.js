import { useState, useEffect } from 'react';
import apiClient from '../utils/API';

//---------------------------------------------------------------------------------------
//              HOOK TO DEBOUNCE API CALL -- VALUE AND DELAY BASIS
//
//    @param { string } query -- city name
//    @param { number } delay -- debounce delay in milliseconds
//    @param { function } onPass -- callback handling successful API response
//    @param { functio } onError -- callback for error handling
//-----------------------------------------------------------------------------------------

 const useWeatherDebounce = (query, delay, onPass, onError) => {


    const [ debouncedQuery, setDebouncedQuery ] = useState(query);

    useEffect(() => {

      // -- UPDATING AFTER DELAY --
      const handler = setTimeout(() => {

         setDebouncedQuery(query);

      }, delay);

      return () => {

         clearTimeout(handler);

      };

    }, [ query, delay, onPass, onError ]);

    useEffect(() => {

      if (!debouncedQuery) return;

      // -- FETCH WEATHER DATA AFTER UPDATE -- 
      const fetchWeatherData = async () => {

         try {

            const response = await apiClient.get('weather', {

               params: {
                  q: debouncedQuery,
                  appid: '30a1ffed1e61fc31dd8a6a8670b1b7f9',
                  units: 'metric',
               },
            });

            onPass(response.data);

         } catch (err) {

            onError(err.message); //<--- from the API
         }

      };

      fetchWeatherData();

    }, [ debouncedQuery, query, onPass, onError ]);
 };

 export default useWeatherDebounce; 
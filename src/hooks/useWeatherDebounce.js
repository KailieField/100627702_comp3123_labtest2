import { useState, useEffect } from 'react';
import apiClient from '../utils/API';
import { API_KEY, UNIT } from '../utils/constants';

//---------------------------------------------------------------------------------------
//              HOOK TO DEBOUNCE API CALL -- VALUE AND DELAY BASIS
//
//    @param { string } query -- city name
//    @param { number } delay -- debounce delay in milliseconds
//    @param { function } onPass -- callback handling successful API response
//    @param { functio } onError -- callback for error handling
//-----------------------------------------------------------------------------------------

 const useWeatherDebounce = (query, delay, onPass) => {


    const [ debouncedQuery, setDebouncedQuery ] = useState(query);

    useEffect(() => {

      // -- UPDATING AFTER DELAY --
      const handler = setTimeout(() => {

         setDebouncedQuery(query);


      }, delay);

      return () => {

         clearTimeout(handler);

      };

    }, [ query, delay]);

    useEffect(() => {

      if (!debouncedQuery) return;

      // -- FETCH WEATHER DATA AFTER UPDATE -- 
      const fetchWeatherData = async () => {

         try {

            const response = await apiClient.get('weather', {

               params: {
                  q: debouncedQuery,
                  appid: API_KEY,
                  units: UNIT,
               },
            });

            onPass(response.data);

         } catch (err) {

            console.error('Something...isnt working...', err.message); //<--- from the API
         }

      };

      fetchWeatherData();

    }, [ debouncedQuery, onPass]);
 };

 export default useWeatherDebounce; 
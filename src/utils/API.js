import axios from 'axios';
import { BASE_URL } from '../utils/constants';

//---------------------------------------------------------------------------------------
//              AXIOS CONFIG FOR OPENWEATHERMAP API
//---------------------------------------------------------------------------------------

const apiClient = axios.create({

    baseURL: BASE_URL,
    responseType: 'json',
    timeout: 10000,
});

// -- INTERCEPTION / LOGGING ERROR (GLOBAL) --
apiClient.interceptors.response.use(

    response => response, 
    error => {
        if (error.response) {
            if (error.response.status === 404) {
                return Promise.reject( new Error(' Hmmm.. are we on the same world? That city doesnt seem to exist here, try again! '));
            }
        }

        console.error('--- ITS AN API ERROR: ', error.message || error);
        return Promise.reject(error);
    }
);

export default apiClient;
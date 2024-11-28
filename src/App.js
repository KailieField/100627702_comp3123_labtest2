import React, { useState } from 'react';
// import WeatherReport from './components/WeatherReport';
import ForecastReport from './components/ForecastReport';
import { DEFAULT_CITY } from './utils/constants';
import WeatherReport from './components/WeatherReport';


//---------------------------------------------------------------------------------------
//                                  MAIN COMPONENT
//---------------------------------------------------------------------------------------

function App(){

  const [ chosenLocation, setChosenLocation ] = useState(DEFAULT_CITY);

  return (

    <div className="App">
      <header className="app-header" style={{ textAlign: 'center', margin: '20px' }}>
        <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333', }}>WEATHER REPORT</h1>
        <input
            type="text"
            placeholder="Enter Location"
            value={chosenLocation}
            onChange={(e) => setChosenLocation(e.target.value)}
            style={{
              padding: '10px',
              margin: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '300px',
            }}
          />
      </header>
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <WeatherReport chosenLocation={ DEFAULT_CITY } />
      <ForecastReport chosenLocation={ DEFAULT_CITY } />
      </main>
    </div>

  );
}

export default App;
import { useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';

function App() {

  const weather = useWeather();
  console.log("Weather", weather);

  useEffect(()=>{
    // get current location
    weather.fetchCurrentUserLocationData();
  }, [])

  return (
    <div className='container-fluid p-0 mt-5'>
      <div className='container shadow rounded-4 pt-5 bg-info'>
        <h1 className='text-center fs-1 fw-bold'>Weather-Forecast</h1>
        <div className='container d-flex justify-content-center mt-4'>
          <Input/>
          <Button onClick={weather.fetchData} value="Go" />
        </div>
        <Card/>
        <Button value="Refresh" />
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import { useWeather } from '../context/Weather'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faCloud } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    const weather = useWeather();

  return (
    <div className='card shadow rounded-4 m-5 bg-info-subtle p-5'>
      <div className='text-center'>
        <h4>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location?.country} </h4>
        <p>{weather.data?.current?.condition?.text}</p>
        <img className='w-5 h-5' src={weather.data?.current?.condition?.icon}  />
        <h2 className='mb-4'>{weather.data?.current?.temp_c}°C</h2>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card shadow rounded-4 m-3 p-3'>
              <i><FontAwesomeIcon icon={faWind} /></i>
              <h6>HUMIDITY</h6>
              <h4>{weather.data?.current?.humidity}</h4>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card shadow rounded-4 m-3 p-3'> 
              <i><FontAwesomeIcon icon={faWind} /></i>
              <h6>WINDSPEED</h6>
              <h4>{weather.data?.current?.wind_kph}</h4>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='card shadow rounded-4 m-3 p-3'>
            <i><FontAwesomeIcon icon={faCloud} /></i>
              <h6>CLOUDS</h6>
              <h4>{weather.data?.current?.cloud}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

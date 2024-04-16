import React from 'react'
import { useWeather } from '../context/Weather'


const Input = () => {
    const weather = useWeather();
    console.log("Weather", weather);

  return (
    <div className=''>
    <input className='input-field rounded-2 px-5'
       type="text"
       placeholder='Search here'
       value={weather.searchCity}
       onChange={(e)=> weather.setSearchCity(e.target.value)}
    />
    </div>
  )
}

export default Input

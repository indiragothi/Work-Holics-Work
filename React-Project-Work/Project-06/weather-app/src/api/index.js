const baseURL = "https://api.weatherapi.com/v1/current.json?key=d6535af4f5ed46f0b07191846242501"

export const getWeatherDataForCity = async(city) =>{
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
}

export const getWeatherDataForLocation = async(lat, lon) =>{
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
}
import axios from 'axios';

import {API_KEY} from './api';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`
console.log(ROOT_URL);
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request made: ', request);
  return{
    type: FETCH_WEATHER,
    payload:request
  }
}

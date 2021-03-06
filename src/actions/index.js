import axios from 'axios';

// import {API_KEY} from './api';
const API_KEY = "affacbeb4b271c8dcf3b238944daf168";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},aus`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER,
    payload:request
  }
}

import axios from 'axios';


export const testingService = () => {
  return axios.get('https://rikljljklckandmortyapi.com/api/character/2')
}
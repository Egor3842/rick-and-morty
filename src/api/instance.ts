import axios from 'axios';

export let instance = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
  },
  baseURL: 'https://rickandmortyapi.com/api/character/',
});

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.telegram.org/bot6000862728:AAHvR3ReSZS0_ZikZnzOZJ0-TZWp6GTZF3Y/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
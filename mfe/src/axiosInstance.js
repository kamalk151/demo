import axios from 'axios'

const baseURL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL_PROD;
// Check if the environment variable is set
console.log('Base URL:', process.env.NODE_ENV);

if (!baseURL) {
  throw new Error('REACT_APP_BASE_URL_LOCAL or REACT_APP_BASE_URL_PROD is not set');
}

const axiosInstance = axios.create({
  baseURL: baseURL, // Dynamically set baseURL
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST',
  },
})

export default axiosInstance

import axios from 'axios';
// const prod = 'https://rdlandbe.herokuapp.com/api';
const prod = 'https://7b24-41-242-52-81.ngrok.io/api';
// const dev = 'http://localhost:5000/api'
const AxiosInstance = axios.create({
    baseURL:  prod
})
export default AxiosInstance;
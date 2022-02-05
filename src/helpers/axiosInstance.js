import axios from 'axios';
const prod = 'https://rdlandbe.herokuapp.com/api';
// const dev = 'http://localhost:5000/api'
const AxiosInstance = axios.create({
    baseURL:  prod
})
export default AxiosInstance;
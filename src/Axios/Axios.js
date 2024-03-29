import axios from 'axios';
const _token = localStorage.getItem('user');
const axiosinstance = axios.create({
  baseURL: 'http://localhost:3040/api',
  headers: {
    authorization: _token ? _token : '',
    'Access-Control-Allow-Origin': '*',
  },
});
export default axiosinstance;

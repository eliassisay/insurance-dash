import axios from 'axios';
const _token = localStorage.getItem('user');
const axiosinstance4 = axios.create({
  baseURL: 'https://api.chapa.co/v1/transaction/initialize',
  headers: {
    authorization: 'Bearer CHASECK_TEST-f2kHdNpLDf8lQdHYFtKq4WwPnIcPk4R4',
    'Access-Control-Allow-Origin': '*',
  },
});
export default axiosinstance4;

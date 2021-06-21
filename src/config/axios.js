import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://api.saludesvida.co`,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Access-Control-Allow-Origin': '*'
      }
})

export default axiosClient;
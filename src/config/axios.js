import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://api.saludesvida.co`,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Access-Control-Allow-Origin': '*'
      }
})

export default axiosClient;
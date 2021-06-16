import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://ec2-3-135-230-168.us-east-2.compute.amazonaws.com:8080`,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Access-Control-Allow-Origin': '*'
      }
})

export default axiosClient;
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `https://homebankingdata-env.eba-3kpvtenj.us-east-2.elasticbeanstalk.com`,
    headers: {
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Access-Control-Allow-Origin': '*'
      }
})

export default axiosClient;
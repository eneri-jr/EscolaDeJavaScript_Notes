const axios = require('axios').default;

const Api = axios.create({baseURL: 'http://localhost:3001'});
export default Api;
import axios from 'axios';
/**
 * Create a new axios instance with baseURL
 */
const axiosInstance = axios.create({
	baseURL: `${'https://whispering-tor-10704.herokuapp.com/'}`,
});
export default axiosInstance;

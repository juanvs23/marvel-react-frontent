import axios from 'axios';
/**
 * Create a new axios instance with baseURL
 */
export const controller = new AbortController();
const axiosInstance = axios.create({
	baseURL: `${'https://gateway.marvel.com/v1/public/'}`,
	params: {
		ts:1,
		apikey:"12be6ffee17d776cbe1e1b2e85c1ac4f",
		hash:"09ccdcf1b90dbfce2bad6023979c33f9"
	},
	signal: controller.signal
});
export default axiosInstance;

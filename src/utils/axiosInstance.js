import axios from 'axios';
/**
 * Create a new axios instance with baseURL
 */
export const controller = new AbortController();

const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_MARVEL_API_URL}`,
	params: {
		ts:import.meta.env.TS,
		apikey:import.meta.env.VITE_MARVEL_API_KEY,
		hash:import.meta.env.VITE_MARVEL_HASH_KEY
	},
	signal: controller.signal
});
export default axiosInstance;

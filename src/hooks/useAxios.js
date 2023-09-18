import { useEffect, useState } from 'react';
import utils from '@/utils';



/**
 * useAxios
 * @param {string} url
 * @returns object {response, error, loading }
 */
export default function useAxios(url) {
	
	const [response, setResponse] = useState(undefined);
	const [error, setError] = useState('');
	const [loading, setloading] = useState(false);
	const getfetch = async () =>{
		setloading(true);
		try {
			console.log(utils);
			const {data:{data,code,status}} =await utils.axiosInstance(url);
			setError(null)
			setResponse({code:status, data,status:code})
		} catch (error) {
			const {response:{data,status},code,message} = error
			setResponse({code,data,status})
			setError({code,message})
		}
		setloading(false);
	}
	useEffect(() => {
		getfetch()
	  return () => {
		utils.controller.abort();
	  };
	}, [url])
	return { response, error, loading };
}

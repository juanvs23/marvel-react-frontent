import axiosInstance from './axiosInstance';

/**
 * getApi
 * @param {string} slug
 * @param {string} id
 * @param {string} options
 * @returns object
 */
export default async function getApi(slug = null, id = null) {
	const hasID = id === null ? '' : `/${id}`;
	const hasSlug = slug === null ? '' : `${slug}`;
	const { data } = await axiosInstance(`${hasSlug}${hasID}`);

	return await data;
}

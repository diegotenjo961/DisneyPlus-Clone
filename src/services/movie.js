import axios from 'axios';
import { getApiUrl } from '../config';

export const getMovieDetails = async ({ id }) => {
	const apiUrl = getApiUrl(`movie/${id}`);
	return await axios.get(apiUrl).then(res => res.data);
}

export const getMovieTrailer = async ({ id }) => {
	const apiUrl = getApiUrl(`movie/${id}/videos`);
	return await axios.get(apiUrl).then(res => res.data);
}

export const getMovieCategory = ({ category }) => {
	const apiUrl = getApiUrl(`movie/${category}`);
	return axios.get(apiUrl).then(res => res.data);
}

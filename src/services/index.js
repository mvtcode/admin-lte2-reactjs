/**
 * Created by tanmv on 01/08/2018.
 */
import axios from 'axios';

axios.create({
	baseURL: '/api',
	method: 'get',
	timeout: 10000,
	responseEncoding: 'utf8',
	headers: {'client-version': '1.0.0'}
});

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const Get = async (url, params = {}) => {
	const results = await axios.get(url, {params});
	return results.data;
};

export const Post = async (url, params = {}) => {
	const results = await axios.post(url, params);
	return results.data;
};

export const Put = async (url, params = {}) => {
	const results = await axios.put(url, params);
	return results.data;
};

export const Delete = async (url) => {
	const results = await axios.delete(url);
	return results.data;
};

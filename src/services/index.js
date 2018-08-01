/**
 * Created by tanmv on 01/08/2018.
 */
'use strict';
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
	return await axios.get(url, params);
};

export const Post = async (url, params = {}) => {
	return await axios.post(url, params);
};

export const Put = async (url, params = {}) => {
	return await axios.post(url, params);
};

export const Delete = async (url) => {
	return await axios.post(url);
};

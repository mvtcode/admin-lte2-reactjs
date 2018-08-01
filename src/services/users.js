/**
 * Created by tanmv on 01/08/2018.
 */
import {Get, Post} from './index';

export const profile = async () => {
	const results = await Get('/api/user/profile', {});
	return results.data;
};

export const login = async ({email, password, remember}) => {
	const results = await Post('/api/user/login', {
		email, password, remember
	});
	return results.data;
};
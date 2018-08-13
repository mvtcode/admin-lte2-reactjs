/**
 * Created by tanmv on 01/08/2018.
 */
import {Get, Post} from './index';

export const profile = async () => {
	return await Get('/api/user/profile', {});
};

export const login = async ({email, password, remember}) => {
	return await Post('/api/user/login', {
		email, password, remember
	});
};
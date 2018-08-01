/**
 * File: videos
 * Created by: tanmv
 * Date: 01/08/2018
 * Time: 19:51
 *
 */

import {Get, Post, Put, Delete} from './index';

export const profile = async () => {
	const results = await Get('/api/videos', {});
	return results.data;
};

export const add = async (info) => {
	const results = await Post('/api/videos', info);
	return results.data;
};

export const update = async (info) => {
	const results = await Put(`/api/videos/${info._id}`, info);
	return results.data;
};

export const remove = async (id) => {
	const results = await Delete(`/api/videos/${id}`);
	return results.data;
};
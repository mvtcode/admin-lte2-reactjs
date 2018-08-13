/**
 * File: videos
 * Created by: tanmv
 * Date: 01/08/2018
 * Time: 19:51
 *
 */

import {Get, Post, Put, Delete} from './index';

export const list = async (params) => {
	return await Get('/api/videos', {params});
};

export const add = async (info) => {
	return await Post('/api/videos', info);
};

export const update = async (info) => {
	return await Put(`/api/videos/${info._id}`, info);
};

export const remove = async (id) => {
	return await Delete(`/api/videos/${id}`);
};
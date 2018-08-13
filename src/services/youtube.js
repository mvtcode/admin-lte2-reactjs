/**
 * File: youtube
 * Created by: tanmv
 * Date: 02/08/2018
 * Time: 16:55
 *
 */

import {Get} from './index';

const key = 'AIzaSyB42PbqbmYBZha_CN5j-3kPOVt8QifUfh8'; // for domain: http://*.hpstar.net

export const getId = (url) => {
	let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	let match = url.match(regExp);
	if(match && match[7].length === 11){
		return match[7];
	}
	return false;
};

export const getInfo = async (id) => {
	const results = await Get('https://www.googleapis.com/youtube/v3/videos', {
		key,
		id,
		fields: 'items(contentDetails(duration),snippet(title,thumbnails,description,tags))',
		part: 'snippet,contentDetails'
	});
	if(results) {
		const info = results.items[0].snippet;
		info.duration = convertISO8601ToSeconds(results.items[0].contentDetails.duration);
		return info;
	}
};

export const formatSecondsAsTime = (secs) => {
	let hr = Math.floor(secs / 3600),
		min = Math.floor((secs - (hr * 3600)) / 60),
		sec = Math.floor(secs - (hr * 3600) - (min * 60));

	if (hr < 10) {
		hr = "0" + hr;
	}
	if (min < 10) {
		min = "0" + min;
	}
	if (sec < 10) {
		sec = "0" + sec;
	}
	if (hr) {
		hr = "00";
	}
	return hr + ':' + min + ':' + sec;
};

export const convertISO8601ToSeconds = (input) => {
	let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
	let hours = 0, minutes = 0, seconds = 0, totalseconds = null;
	if (reptms.test(input)) {
		let matches = reptms.exec(input);
		if (matches[1]) hours = Number(matches[1]);
		if (matches[2]) minutes = Number(matches[2]);
		if (matches[3]) seconds = Number(matches[3]);
		totalseconds = hours * 3600  + minutes * 60 + seconds;
	}
	return totalseconds;
};

export const convertISO8601ForView = (input) => {
	let reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
	let hours = 0, minutes = 0, seconds = 0, view;
	if (reptms.test(input)) {
		let matches = reptms.exec(input);
		if (matches[1]) hours = matches[1];
		if (matches[2]) minutes = matches[2];
		if (matches[3]) seconds = matches[3];
		view = hours + ':' + minutes + ':' + seconds;
	}
	return view;
};
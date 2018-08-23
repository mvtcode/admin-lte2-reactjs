'use strict';

/**
 * File: string
 * Created by: tanmv
 * Date: 23/08/2018
 * Time: 18:34
 *
 */

String.prototype.left = function(n) {
	if(this.length > n) {
		return this.substring(0, n) + '...';
	}
	return this;
};
'use strict';

// given an array an two indices i and j, it will swap a[i] and a[j]
module.exports = function(a, i, j){
	var temp = a[i];
	a[i] = a[j];
	a[j] = temp;
};
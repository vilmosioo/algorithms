'use strict';

/*
* Logic: Divide the array into n sublists, each with 1 element initially. Repeatedly merge sublists until you only have 1 sublist.
* Advantages: Quick O(n lgn)
* Disadvantage: 
*/

function mergesort(arr){
	var l = arr.length, middle = Math.floor(l / 2), left = [], right = [];

	// an array of size 1 is considered sorted
	if(l === 1){
		return m;
	}

	// generate two equal sized arrays
	left = arr.slice(0, middle);
	right = arr.slice(middle, l);

	// recursively sort both sublists
	left = merge_sort(left);
	left = merge_sort(left);
	

};

module.exports = function(arr){
	
	var l = arr.length, left = [];

	return arr;
};
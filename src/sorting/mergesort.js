'use strict';

/*
* Logic: Divide the array into n sublists, each with 1 element initially. Repeatedly merge sublists until you only have 1 sublist.
* Advantages: Quick O(n lgn)
* Disadvantage: 
*/

function merge(left, right){
	var i, j, result = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}
	// we might still have elements left
	return result.concat(left).concat(right);
}

function mergesort(arr){
	var l = arr.length, middle = Math.floor(l / 2), left = [], right = [];
	
	// an array of size 1 is considered sorted
	if(l <= 1){
		return arr;
	}
	
	// generate two equal sized arrays
	left = arr.slice(0, middle);
	right = arr.slice(middle, l);

	// recursively sort both sublists
	left = mergesort(left);
	right = mergesort(right);
	return merge(left, right);
};

module.exports = function(arr){
	return mergesort(arr);
};
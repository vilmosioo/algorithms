'use strict';

/*
* Efficient sorting algorithm. Can be 2-3 times faster than mergesort
* Logic: Divide and conquer algorithm. Pick an element (pivot) from the array. 
* Partition the array into 2 sublists: everything smaller than the pivot to the left, everythigng else to the right. 
* Apply this recursively to the sublists.
* Advantages: O(n lgn)
* Disadvantage: Worst case On^2 when pivot is left most elemetn and array is already sorted
*/

var swap = require('../util/swap');

var quicksort = function(arr, lo, hi){
	if(lo < hi){
		var current = partition(arr, lo, hi);
		quicksort(arr, lo, current - 1);
		quicksort(arr, current + 1, hi);
	}
	return arr;
};

var partition = function(arr, lo, hi){
	// get pivot
	var index = lo + Math.floor((hi - lo) / 2), pivot = arr[index], current = lo, i; 

	// move smaller elements left to the pivot and larger to the right
	swap(arr, hi, index);
	for(i = lo; i < hi; i++){
		if(arr[i] < pivot){
			swap(arr, current, i);
			current++;
		}
	}
	swap(arr, current, hi);

	return current;
};

module.exports = function(arr){
	return quicksort(arr, 0, arr.length - 1);
};
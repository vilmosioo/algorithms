'use strict';

/*
* Efficient sorting algorithm. Can be 2-3 times faster than mergesort
* Logic: Divide and conquer algorithm. Pick an element (pivot) from the array. 
* Partition the array into 2 sublists: everything smaller than the pivot to the left, everythigng else to the right. 
* Apply this recursively to the sublists.
* Advantages: O(n lgn)
* Disadvantage: Worst case On^2 when pivot is left most elemetn and array is already sorted
*/

var quicksort = function(arr){
	// get pivot
	var i, l = arr.length, index = Math.floor(l/2), pivot = arr[index];

	// arr of length 1 is considered sorted
	if(l <= 1){
		return arr;
	}

	// create two sublists, one with smaller, one with larger
	var smaller = [], larger = [];
	for(i = 0; i < l; i++){
		if(i === index){
			continue;
		}

		if(arr[i] < pivot){
			smaller.push(arr[i]);
		} else {
			larger.push(arr[i]);
		}
	}

	// apply quicksort to each
	smaller = quicksort(smaller);
	larger = quicksort(larger);

	// return concat result
	smaller.push(pivot);
	return smaller.concat(larger);
};

module.exports = function(arr){
	return quicksort(arr);
};
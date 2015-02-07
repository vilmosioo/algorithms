'use strict';

/*
* Basic sorting algorithm.
* Logic: While the array is not sorted, go through the array from beggining to end, swapping each pair of elements that are not sorted.
* Advantages: can quickly check if an array is sorted already.
* Disadvantage: O(n^2)
*/

var swap = require('../util/swap');

module.exports = function(arr){
	var swapped, i, l = arr.length;
	
	do {
		swapped = false;
		for(i = 1; i < l; i++){
			if(arr[i-1] > arr[i]){
				swap(arr, i-1, i);
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
};
'use strict';

/*
* Logic: For each element in an array, find the position it belongs in and insert it in the correct location.
* Uses a growing sorted subset of the array.
* At each array-position, it checks the value against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
* Advantages: Effitient on small datasets, even faster than quicksort
* Notes: Can be combined with quicksort to produce faster algorithm.
* Disadvantage: Slow compared to more advanced sorting algorithms
* Best case: O(n) for sorted array
* Worst case: O(n^2) for reverse sorted array
*/

var swap = require('../util/swap');

module.exports = function(arr){
	var x, i, j, l = arr.length;
	for(i = 1; i < l; i++){
		j = i;
		while(arr[j] < arr[j - 1] && j > 0){
			swap(arr, j, j - 1);
			j--;
		}
	}
	return arr;
};
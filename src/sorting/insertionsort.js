'use strict';

/*
* Logic: For each element in an array, find the position it belongs in and insert it in the correct location.
* Uses a growing sorted subset of the array.
* At each array-position, it checks the value against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.
* Advantages: Effitient on small datasets
* Disadvantage: Slow compared to more advanced sorting algorithms
*/

module.exports = function(arr){
	var x, i, j, l = arr.length;
	for(i = 1; i < l; i++){
		x = arr[i];
		j = i - 1;
		while(x < arr[j] && j > 0){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j] = x;
	}
	return arr;
};
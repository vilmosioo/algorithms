'use strict';

// This file is used as exercise to create sorting functions

describe('Generic sort testing', function(){

	var helper = require('../helpers/sorting'), swap = require('../../src/util/swap');

	var partition = function(arr, lo, hi){
		var index = lo + Math.floor((hi - lo) / 2),
			pivot = arr[index],
			current = lo, 
			i;

		swap(arr, hi, index);
		for(i = lo; i< hi; i++){
			if(arr[i] < pivot){
				swap(arr, i, current);
				current++;
			}
		}
		swap(arr, current, hi);
		return current
	};

	var quicksort = function(arr, lo, hi){
		if(lo < hi){
			var p = partition(arr, lo, hi);
			quicksort(arr, lo, p - 1);
			quicksort(arr, p + 1, hi);
		}
		return arr;
	};

	var sort = function(arr){
		// quicksort
		// given an array, choose a pivot
		// arrange everything smaller to the left and the rest to the right


		return quicksort(arr, 0, arr.length - 1);
	};

	it('should sort given arrays', function(){
		helper(sort);
	});

});
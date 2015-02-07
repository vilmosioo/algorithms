'use strict';

describe('Merge sort', function(){

	var mergesort = require('../../src/sorting/mergesort'), 
		helper = require('../helpers/sorting');

	it('should sort given arrays', function(){
		helper(mergesort);
	});

});
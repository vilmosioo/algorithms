'use strict';

describe('Quick sort', function(){

	var quicksort = require('../../src/sorting/quicksort'), 
		helper = require('../helpers/sorting');

	it('should sort given arrays', function(){
		helper(quicksort);
	});

});
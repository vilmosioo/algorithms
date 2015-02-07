'use strict';

describe('Insertion sort', function(){

	var insertionsort = require('../../src/sorting/insertionsort'), 
		helper = require('../helpers/sorting');

	it('should sort given arrays', function(){
		helper(insertionsort);
	});

});
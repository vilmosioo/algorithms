'use strict';

describe('Bubble sort', function(){

	var bubblesort = require('../../src/sorting/bubblesort'), 
		helper = require('../helpers/sorting');

	it('should sort given arrays', function(){
		helper(bubblesort);
	});

});
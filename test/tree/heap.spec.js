'use strict';

describe('Heap', function(){

	var Heap = require('../../src/tree/heap'),
		expect = require('expect.js'),
		tests = require('../helpers/data');

	it('should construct a heap', function(){
		tests.forEach(function(test){
			var heap = new Heap(test.input.slice(0));

			expect(heap.isEmpty()).to.be(test.input.length === 0);
			expect(heap.size).to.be(test.input.length);
		});
	});

});
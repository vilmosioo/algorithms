'use strict';

var expect = require('expect.js');

describe('Algorithms', function(){

	var Algorithms = require('../src');

	it('should contain sorting API', function(){
		expect(Algorithms).to.be.an(Object);
		expect(Algorithms.Sorting).to.be.an(Object);
		expect(Algorithms.Sorting.bubblesort).to.be.a(Function);
		expect(Algorithms.Sorting.insertionsort).to.be.a(Function);
		expect(Algorithms.Sorting.mergesort).to.be.a(Function);
		expect(Algorithms.Sorting.quicksort).to.be.a(Function);
	});

	it('should contain threes API', function(){
		expect(Algorithms.Heap).to.be.an(Function);
		expect(Algorithms.BST).to.be.a(Function);
	});

});
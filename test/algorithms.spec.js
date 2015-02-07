'use strict';

var expect = require('expect.js');

describe('Algorithms', function(){

	var Algorithms = require('../src');

	it('should contain sorting API', function(){
		expect(Algorithms).to.be.an(Object);
		expect(Algorithms.Sorting).to.be.an(Object);
		expect(Algorithms.Sorting.bubblesort).to.be.a(Function);
	})

});
'use strict';

var expect = require('expect.js'),
	data = [[], [1], [2, 1], [3, 2, 1], [1, 2, 3, 4], [9, 6, 8, 4, 2, 3, 1, 11, 0, 5, 5, -1], [5, 4, 3, 2, 1]],
	// we generate the sorting tests by using the array of inputs and calculating the expected sorted value using the native sort method
	tests = data.map(function(test){
		return {
			input: test,
			expect: test.slice(0).sort(function(a, b){
				return a - b;
			})
		};
	});

module.exports = function(sort){
	tests.forEach(function(test){
		expect(sort(test.input.slice(0))).to.eql(test.expect);
	});
};
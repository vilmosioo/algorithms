'use strict';

var expect = require('expect.js'),
	data = [[], [1], [2, 1], [3, 2, 1], [1, 2, 3, 4], [9, 6, 8, 4, 2, 3, 1, 11, 0, 5, 5, -1], [5, 4, 3, 2, 1]],
	// we generate the sorting tests by using the array of inputs and calculating the expected sorted value using the native sort method
	tests = data.reduce(function(obj, test){
		obj.push({
			input: test,
			expect: test.slice().sort(function(a, b){
				return a < b;
			})
		});
		return obj;
	}, []);

module.exports = function(sort){
	tests.forEach(function(test){
		console.log(test.input);
		console.log(test.expect);

		expect(sort(test.input)).to.eql(test.expect);
	});
};
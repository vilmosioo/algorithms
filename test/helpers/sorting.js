'use strict';

var expect = require('expect.js'),
	tests = require('./data');
	// we generate the sorting tests by using the array of inputs and calculating the expected sorted value using the native sort method

module.exports = function(sort){
	tests.forEach(function(test){
		expect(sort(test.input.slice(0))).to.eql(test.expect);
	});
};
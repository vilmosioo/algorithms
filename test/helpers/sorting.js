'use strict';

var expect = require('expect.js'), data = [
	{
		input: [2, 1],
		expect: [1, 2]
	},
	{
		input: [],
		expect: []
	}
];

module.exports = function(sort){
	data.forEach(function(test){
		expect(sort(test.input)).to.eql(test.expect);
	});
};
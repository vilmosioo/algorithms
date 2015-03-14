'use strict';

var data = [
	[],
	[1],
	[2, 1],
	[3, 2, 1],
	[1, 2, 3, 4],
	[9, 6, 8, 4, 2, 3, 1, 11, 0, 5, 5, -1],
	[5, 4, 3, 2, 1]
];

module.exports = data.map(function(test){
	return {
		input: test,
		expect: test.slice(0).sort(function(a, b){
			return a - b;
		})
	};
});
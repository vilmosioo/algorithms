'use strict';

var fs = require('fs');

module.exports = {
	Sorting: {
		bubblesort: require('./sorting/bubblesort'),
		insertionsort: require('./sorting/insertionsort'),
		mergesort: require('./sorting/mergesort'),
		quicksort: require('./sorting/quicksort')
	},
	Heap: require('./tree/heap'),
	BST: require('./tree/bst')	
};
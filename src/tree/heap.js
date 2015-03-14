'use strict';

// implementation of a heap data structure using a single 0-based array
// Thus the children of the node at position n would be at positions 2n and 2n+1 in a one-based array, or 2n+1 and 2n+2 in a zero-based array. 
var Heap = function(arr){
	this._elements = arr;

	// returns the number of nodes in the tree
	Object.defineProperty(this, 'size', {
		get: function(){
			return this._elements.length;
		}
	});
};

// adds a new node to the heap
Heap.prototype.add = function(){

};

// removes node based on key
// returns true on successful removal
Heap.prototype.remove = function(){

};

// extracts the root node
Heap.prototype.extract = function(){

};

// finds a node based on it's key and returns the node's value (or null if not found)
Heap.prototype.contains = function(){

};

// returns true if the heap is empty
Heap.prototype.isEmpty = function(){
	return this.size === 0;
};


module.exports = Heap;
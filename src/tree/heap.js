'use strict';

var swap = require('../util/swap');

var parent = function(index){
	return Math.floor((index - 1) / 2);
};

var firstChild = function(index){
	return index * 2 + 1;
};

var lastChild = function(index){
	return index * 2 + 2;
};

// implementation of a heap data structure using a single 0-based array
// Thus the children of the node at position n would be at positions 2n+1 and 2n+2 in a zero-based array. 
var Heap = function(arr){
	this._elements = [];

	for(var i = 0, l = arr.length; i < l; i++){
		this.insert(arr[i], arr[i]);
	}

	// returns the number of nodes in the tree
	Object.defineProperty(this, 'size', {
		get: function(){
			return this._elements.length;
		}
	});
};

// adds a new node to the heap
Heap.prototype.insert = function(key, value){
	var current = this._elements.push(value) - 1;

	// while the current node is smaller than its parent node, we swap them
	while(this._elements[current] < this._elements[parent(current)]){
		swap(this._elements, current, parent(current));
		current = parent(current);
	}
};

// removes node based on key
// returns true on successful removal
Heap.prototype.remove = function(index){
	swap(this._elements, index, this.size - 1);
	var root = this._elements.pop(), current = 0, l = this._elements.length;
	
	while(
		(firstChild(current) < l && this._elements[current] > this._elements[firstChild(current)]) || 
		(lastChild(current) < l && this._elements[current] > this._elements[lastChild(current)])
	){
		if(firstChild(current) < l && lastChild(current) < l){
			if(this._elements[firstChild(current)] < this._elements[lastChild(current)]){
				swap(this._elements, current, firstChild(current));
				current = firstChild(current);
			} else {
				swap(this._elements, current, lastChild(current));
				current = lastChild(current);
			}
		} else if(firstChild(current) < l){
			swap(this._elements, current, firstChild(current));
			current = firstChild(current);
		} else {
			swap(this._elements, current, lastChild(current));
			current = lastChild(current);	
		}
	}
	return root;
};

// extracts the root node
Heap.prototype.extract = function(){
	return this.remove(0);
};

// finds a node based on it's key and returns the node's value (or null if not found)
Heap.prototype.contains = function(){

};

// returns true if the heap is empty
Heap.prototype.isEmpty = function(){
	return this.size === 0;
};


module.exports = Heap;
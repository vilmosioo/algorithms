'use strict';

describe('Heap', function(){

	var Heap = require('../../src/tree/heap'),
		expect = require('expect.js'),
		tests = require('../helpers/data');

	it('should implement heap API', function(){
		expect(Heap.prototype.insert).to.be.a(Function);
		expect(Heap.prototype.remove).to.be.a(Function);
		expect(Heap.prototype.isEmpty).to.be.a(Function);
		expect(Heap.prototype.contains).to.be.a(Function);
	});

	it('should construct a heap', function(){
		tests.forEach(function(test){
			var heap = new Heap(test.input.slice(0));

			expect(heap.isEmpty()).to.be(test.input.length === 0);
			expect(heap.size).to.be(test.input.length);

			test.expect.forEach(function(el){
				expect(heap.extract()).to.be(el);
			});

			expect(heap.isEmpty()).to.be(true);
			expect(heap.size).to.be(0);
		});
	});

});
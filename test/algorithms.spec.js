'use strict';

describe('Algorithms', function(){

	it('should contain sorting API', function(){
		expect(Algorithms).toBeDefined();
		expect(Algorithms.Sorting).toBeDefined();
		expect(Algorithms.Sorting.bubblesort).toBeDefined();
	})

});
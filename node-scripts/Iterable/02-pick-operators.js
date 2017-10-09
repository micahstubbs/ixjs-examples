// Instead of bringing in the entire library for Iterable, 
// we can pick and choose which operators we want, 
// for bundling concerns.

const Ix = require('ix');

// CommonJS
const Iterable = require('ix/iterable').IterableX;
require('ix/add/iterable/of');
require('ix/add/iterable-operators/map');

let results = Iterable.of(1,2,3)
  .map(x => x + '!!');

console.log('results', results);

// results2 MapIterable {
//   _source: OfIterable { _args: [ 1, 2, 3 ] },
//   _selector: [Function] }
// note: we're waiting on async generator support in Node.js
// we need that for this example
// with the `async function*` syntax
// to run in a node environment
// http://kangax.github.io/compat-table/esnext/#test-Asynchronous_Iterators_async_generators

// in the meantime, we can transpile the code and run that
// $ babel-node 02-pick-operators.js 

// Instead of bringing in the entire library 
// for AsyncIterable, we can pick and choose 
// which operators we want, for bundling concerns.
// CommonJS
const AsyncIterable = require('ix/asynciterable').AsyncIterableX;
require('ix/add/asynciterable/of');
require('ix/add/asynciterable-operators/map');

const results = AsyncIterable.of(1,2,3)
  .map(x => x + '!!');

console.log('results', results);

// results MapAsyncIterable {
//   _source: OfAsyncIterable { _args: [ 1, 2, 3 ] },
//   _selector: [Function] }
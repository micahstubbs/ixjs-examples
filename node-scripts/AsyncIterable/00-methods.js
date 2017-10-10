// The AsyncIterable object is based off 
// the ECMAScript Proposal for Asynchronous Iterators. 
// This would allow us to create 
// asynchronous collections of Promises 
// and be able to use such methods as 
// the map, filter, reduce and other Array#extras methods 
// that you are used to using.

// note: we're waiting on async generator support in Node.js
// we need that for this example
// with the `async function*` syntax
// to run in a node environment
// http://kangax.github.io/compat-table/esnext/#test-Asynchronous_Iterators_async_generators

// in the meantime, we can transpile the code and run that
// $ babel-node 00-methods.js 

// if you want to see the transpiled output, run
// $ babel 00-methods.js > 00-methods-transpiled.js

// CommonJS
const Ix = require('ix');

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

Ix.AsyncIterable.from(gen())
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .forEach(x => console.log(`Next ${x}`))
  .catch(err => console.log(`Error ${err}`));

// Next 4
// Next 8
// note: we're waiting on async generator support in Node.js
// we need that for this example
// with the `async function*` syntax
// to run in a node environment
// http://kangax.github.io/compat-table/esnext/#test-Asynchronous_Iterators_async_generators

// in the meantime, we can transpile the code and run that
// $ babel-node 01-for-await.js 

// Much like with the Iterable object 
// where we can iterate through our collections, 
// we can use `for await ... of` instead 
// which allows us to iterate over 
// the asynchronous collection.

// CommonJS
const Ix = require('ix');

async function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

const results = Ix.AsyncIterable.from(gen())
  .filter(x => x % 2 === 0)
  .map(x => x * 2);

for await (let item of results) {
  console.log(`Next ${x}`);
}

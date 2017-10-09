// The Iterable class a way to create and compose 
// synchronous collections much like 
// Arrays, Maps and Sets in JavaScript 
// using the Array#extras style 
// using the familiar methods you are used to 
// like map, filter, reduce and more.

const Ix = require('ix');

Ix.Iterable.from([1,2,3,4])
  .filter(x => x % 2 === 0)
  .map(x => x * 2)
  .forEach(x => console.log(`Next ${x}`));

// Next 4
// Next 8
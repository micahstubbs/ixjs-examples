// we can use the for ... of statements 
// to iterate our collections.

const Ix = require('ix');

const results = Ix.Iterable.from([1,2,3,4])
  .filter(x => x % 2 === 0)
  .map(x => x * 2);

for (let item of results) {
  console.log(`Next ${item}`);
}

// Next 4
// Next 8
// We can also bring in only the operators 
// that we want to 
// using just the operators themselves. 
// Many of these operators take 
// a simple Iterable source 
// such as an Array, Map, Set or generator function 
// such as our map and filter functions.

const map = require('ix/iterable/map').map;
const filter = require('ix/iterable/filter').filter;

const source = [1,2,3];
const results = map(
  filter(
    source,
    x => x % 2 === 0
  ),
  x => x * x
);

for (let item of results) {
  console.log(`Next ${item}`);
}

// Next 4

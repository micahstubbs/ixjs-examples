// We can mix the two approaches by adding
// the minimal chain operator which then allows us
// to create a more fluent style
// while still keeping the surface area to a minimum.

// CommonJS
const Iterable = require('ix/iterable').IterableX;
require('ix/add/iterable-operators/chain');
const of = require('ix/iterable/of').of;
const filter = require('ix/iterable/filter').filter;
const map = require('ix/iterable/map').map;

const results = of(1, 2, 3)
  .chain(source => filter(source, x => x % 2 === 0))
  .chain(source => map(source, x => x * x));

for (let item of results) {
  console.log(`Next: ${item}`);
}

// Next: 4
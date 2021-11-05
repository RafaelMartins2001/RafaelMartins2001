'use strict';

var zip = require('./exercicio3.js');

[1,2,3].zip([4,5,6], function(left, right) { return left + right}); // [5,7,9]

[1,2,3].zip([4,5,6,7,8], (left, right) => left + right); // [5,7,9]

[1,2,3].zip([4,5], (left, right) => left + right); // [5,7]

[1,2,3].zip([], (left, right) => left + right); // []

[].zip([1,2,3], (left, right) => left + right); // []



//____________________________________________________________________________________________________________________________
console.log(
[1,2,3].zip([4,5,6], function(left, right) { return left + right}),

[1,2,3].zip([4,5,6,7,8], (left, right) => left + right),

[1,2,3].zip([4,5], (left, right) => left + right),

[1,2,3].zip([], (left, right) => left + right),

[].zip([1,2,3], (left, right) => left + right)
);
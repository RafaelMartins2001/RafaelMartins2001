var filterProperties = require('./exercicio1.js');

const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'};

const props = ['b', 'd', 'g', 'a'];
const oFiltered = filterProperties(props, o);
console.log(oFiltered);
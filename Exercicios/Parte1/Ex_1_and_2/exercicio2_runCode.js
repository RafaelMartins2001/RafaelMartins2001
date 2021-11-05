var filterPropertiesN = require('./exercicio2.js');

const props = ['b', 'd', 'g', 'a'];

const objs = [
    {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
    {b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
    {x: 'Vision', y: false}
 ];

 
const objsFiltered = filterPropertiesN(props, objs)
console.log(objsFiltered);
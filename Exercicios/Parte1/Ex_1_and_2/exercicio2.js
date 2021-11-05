'use strict';

var filterProperties = require('./exercicio1.js');

module.exports = function filterPropertiesN(propNames, objs){
    const myArray = new Array;
	for(let i of objs){
      myArray.push(filterProperties(propNames, i));
    }
    return myArray;
}



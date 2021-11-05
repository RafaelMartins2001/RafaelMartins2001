'use strict';

module.exports = Array.prototype.zip = function(a, combiner) {
    let myArray = new Array;
    if(this.length <= a.length){
    for(let i = 0; i < this.length; i++){
    myArray.push(combiner(this[i], a[i]));
        }
    }
    if(a.length < this.length){
        for(let j = 0; j < a.length; j++){
        myArray.push(combiner(this[j], a[j]));
        }
    }
    return myArray;
  }

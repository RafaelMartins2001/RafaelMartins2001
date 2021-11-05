'use strict';
module.exports = function filterProperties(propNames, obj){
	return Object.keys(obj)
	.filter(i => propNames.includes(i))
	.reduce((obj_final , i) => {
		obj_final[i] = obj[i];
		return obj_final;
	},
	{})
}

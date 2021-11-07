'use strict';

const filename = process.argv[2] || './output.json';
const filterProperties = require('../Parte1/Ex_1_and_2/exercicio2');
const fsp = require('fs/promises');
const fetch = require('node-fetch');

const props =['name', 'id', 'url']; 

const ATLAS_CLIENT_ID = process.env['ATLAS_CLIENT_ID']


function getWithExplicitPromises() {
return fetch(`https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=${ATLAS_CLIENT_ID}`) // p1
	.then(res => {
		console.log(res.status, res.statusText);
		return res.text(); // p6
	}) // p2
	.then(txt => { // request body text
		const obj = JSON.parse(txt);
		const object = filterProperties(props, obj.lists);
		const result = JSON.stringify(object)
		return fsp.appendFile(filename, result); // p7
	}) // p3
	.then(() => {
		console.log("written to file");
	}) // p4
	.catch(err => {
		console.log(err);
	}) // p5
}

getWithExplicitPromises();
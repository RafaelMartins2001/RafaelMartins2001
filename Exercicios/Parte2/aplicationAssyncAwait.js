'use strict';

const filename = process.argv[2] || './output.json';
const filterProperties = require('../Parte1/Ex_1_and_2/exercicio2');
const fsp = require('fs/promises');
const fetch = require('node-fetch');

const props =['name', 'id', 'url']; 

const ATLAS_CLIENT_ID = process.env['ATLAS_CLIENT_ID']
    

async function getWithAsyncAwait(url) {
	try {
		const res = await fetch(
			`${url}${ATLAS_CLIENT_ID}`
		);
		if (res.status === 200) {		
			console.log(res.status, res.statusText);
			const txt = await res.text();
         const obj = JSON.parse(txt);
		   const object = filterProperties(props, obj.lists);
		   const result = JSON.stringify(object)
         console.log("written to file");
		   return fsp.appendFile(filename, result);
		} else {
			throw { msg: "Invalid response", err: res };
		}
	} catch (err) {
		console.log("[CATCH]", err);
	}
}

const url = 'https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=';
getWithAsyncAwait(url);
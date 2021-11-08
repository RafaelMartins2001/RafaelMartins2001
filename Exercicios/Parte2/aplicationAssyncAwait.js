'use strict';

const filename = process.argv[2] || './output.json';
const filterProperties = require('../Parte1/Ex_1_and_2/exercicio2');
const fsp = require('fs/promises');
const fetch = require('node-fetch');

const props =['name', 'id', 'url']; 

const ATLAS_CLIENT_ID = process.env['ATLAS_CLIENT_ID']
    

async function getWithAsyncAwait(...url) {
	let final_result = new Array;
	for(let i in url){
	try {
		
		let res = await fetch(
			`${url[i]}${ATLAS_CLIENT_ID}`
		);
		if (res.status === 200) {		
			console.log(res.status, res.statusText);
			let txt = await res.text();
         let obj = JSON.parse(txt);
		   let object = filterProperties(props, obj.lists);
		   let result = JSON.stringify(object)
         console.log("written to file");
		   final_result.push(result);
		} else {
			throw { msg: "Invalid response", err: res };
		}
		
		
	} catch (err) {
		console.log("[CATCH]", err);
	}
}
return fsp.appendFile(filename, final_result);
}

const url = 'https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=';
const url2 = 'https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=';
getWithAsyncAwait(url, url2);
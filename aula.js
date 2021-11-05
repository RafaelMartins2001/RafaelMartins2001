'use strict';

function sleep(ms){
  return new Promise((reslove, reject)=>{
    setTimeout(resolve, ms);
  });
}

sleep(4000).then(()=> { console.log('DONE');});


function run1(){
	console.log('Going to Sleep...');
	sleep(4000).then (()=>{console.log('DONE');});
}

async function run2(){
	try{
	console.log('Going to Sleep...');
	await sleep(4000);
	console.log('DONE');
	}catch (err){
		console.log('FAIL');
	}
	console.log('run2 end');
}

run2();

console.log(':: end of code ::');
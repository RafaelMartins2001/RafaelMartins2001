'use strict';


const aplication = require('urllib');


aplication.request('https://api.boardgameatlas.com/api/lists?username=trentellingsen&client_id=JLBr5npPhV',
    function (err, data, res) {
		if (err) {
			console.log('Failed to get a the ids');
			console.log(err);
		} else {
			console.log(res);
			console.log('-----');
			console.log(data.toString());
		}
	}
);

console.log(":: REQUEST FINISHED AND PROPERLY DISPLAYED ::");
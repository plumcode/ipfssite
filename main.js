const fs = require('fs');
const IPFS = require('ipfs');

const main = async (filename) => {
	const node = await IPFS.create();
	let data = '';	
	try {
		data = fs.readFileSync(filename, 'utf8');
		console.log(data);    
	} catch(e) {
		console.log('Error:', e.stack);
	}


	console.log("Adding");

	// add your data to to IPFS - this can be a string, a Buffer,
	// a stream of Buffers, etc
	const results = await node.add(data);
	console.log("Added");
	console.log(results);
}

let args = process.argv.slice(2);
main(args[0]);

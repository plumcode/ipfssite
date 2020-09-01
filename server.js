const http = require('http');
const IPFS = require('ipfs');
let args = process.argv.slice(2);
let port = args[0];
let filedata = '';
let cid = args[1];

const getStream = async (cid) => {
	const node = await IPFS.create();
	const stream = node.cat(cid);
	let data = '';
	for await (const chunk of stream) {
	  data += chunk.toString();
	}
	return data;
}


const main = async (req, res) => {
	//const cid = 'QmVX4ngfJDrpFAvKGm2LRW6NSSrqDL2UcYBacS1wV1HgA3';
	if (filedata === '') {
		filedata = await getStream(cid);
	}
	res.writeHead(200, { 'Content-Type': 'text/html' }); 
	res.write(filedata);
}

let server = http.createServer(main);
server.listen(port);

console.log(`Node.js web server at ${port} is running...`);

const IPFS = require('ipfs');


const getStream = async (cid) => {
	const node = await IPFS.create();
	const stream = node.cat(cid);
	let data = '';
	for await (const chunk of stream) {
	  // chunks of data are returned as a Buffer, convert it back to a string
	  data += chunk.toString()
	}
	return data;
}

const main = async () => {
	console.log(data);

}


main();

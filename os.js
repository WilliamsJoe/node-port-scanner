const os = require('os');

const interfaces = os.networkInterfaces();
const addresses = [];

for (let i in interfaces) {
	for (let k in interfaces[i]) {
		const address = interfaces[i][k];
		if (address.family === 'IPv4' && !address.internal) {
			addresses.push(address.address);
		}
	}
}

console.log('Addresses', addresses);
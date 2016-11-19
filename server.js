const net = require('net');
const host = 'localhost';
let start = 1;
const end = 10000;

const timeout = 2000;
console.log('Start');
while (start <= end) {
	let port = start;
	console.log('Port', port);
	(function (port) {
		let s = new net.Socket();

		s.setTimeout(timeout, function () {s.destroy();});
		const connection = {
			port,
			host
		}
		s.connect(connection, function () {
			console.log('PORT OPEN:', port);
		});

		s.on('data', function (data) {
			console.log(port + ': ' + data);
			s.destroy();
		});

		s.on('error', function (e) {
			s.destroy();
		});
	})(port)

	start++;
}
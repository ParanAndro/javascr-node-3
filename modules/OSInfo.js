var os = require('os'),
	colors = require('colors'),
	uptimeInfo = require('./uptime');

function getOSinfo() {
	var type = os.type(),
		release = os.release(),
		cpu = os.cpus()[0].model,
		userInfo = os.userInfo();

	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	}
	console.log(('Release:'.green), release,);
	console.log((colors.red.underline('CPU model:')), cpu);
	console.log(('System:'.rainbow), type);
	console.log(('User name:'.blue), userInfo.username);
	console.log(('Home dir:'.bgMagenta), userInfo.homedir);
	uptimeInfo.print();
}

exports.print = getOSinfo;
 

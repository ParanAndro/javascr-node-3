var os = require('os');

function uptimeInfo () {
	var uptime = os.uptime(),
		secRest = ((uptime % 60).toFixed(0)),
		min = ((uptime / 60).toFixed(0))
		hrs = ((min / 60).toFixed(0)),
		minRest = ((min % 60).toFixed(0));

	if (uptime < 60) {
		console.log('Uptime:', uptime, 'sec.');
	} if (uptime < 3600) {
		console.log('Uptime:', min, 'min.,', secRest, 'sec.');
	} else {
		console.log('Uptime:', hrs, 'h,', minRest, 'min.', secRest, 'sec.');
	}
}
exports.print = uptimeInfo;
require('dotenv').config({ path: 'keys.env' });

var app = require('./app');
var port = process.env.PORT;

var server = app.listen(port, () => {
	console.log('Express server listening on port ' + port);
});

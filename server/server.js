var loopback = require('loopback');
var path = require('path');
var boot = require('loopback-boot');
var _ = require('underscore');
var app = module.exports = loopback();


// Set up the /favicon.ico
app.use(loopback.favicon());

// request pre-processing middleware
app.use(loopback.compress());

// -- Add your pre-processing middleware here --

// boot scripts mount components like REST API
boot(app, __dirname);

console.log('Defined models are', _.keys(app.models));
var Deporte = app.models.Deporte;
var Entrenador = app.models.Entrenador;
var Clase = app.models.Clase;
var Establecimiento = app.models.Establecimiento;
var Comuna = app.models.Comuna;

Clase.hasMany(Comuna, {
	through: Establecimiento
});
Comuna.hasMany(Clase, {
	through: Establecimiento
});

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
//   var path = require('path');
//   app.use(loopback.static(path.resolve(__dirname, '../client')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('json spaces', 2); //pretty print results for easier viewing later


app.use(loopback.static(path.resolve(__dirname, '../web')));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

app.start = function () {
	// start the web server
	return app.listen(function () {
		app.emit('started');
		console.log('Web server listening at: %s', app.get('url'));
	});
};







// start the server if `$ node server.js`
if (require.main === module) {
	app.start();
}
var http       = require('http'),
    express    = require('express'),
	colors     = require('colors'),
    app        = express(),
	config     = require(__dirname + '/config.json'),
	app_title  = config.app.name,
	port       = config.app.port;

app.use('/', express.static(__dirname + '/ui/'));

app.listen = function(port){
  var server = http.createServer(this);
  console.log('\033[2J');
  console.log(('On ' + new Date()));
  console.log('\r\nthe '+ app_title.underline.blue +' example was started on port ' + port.toString().underline.blue);
  console.log('\r\nTo stop press Ctrl+C');
  return server.listen.apply(server, arguments);
};

app.listen(port);
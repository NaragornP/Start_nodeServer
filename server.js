var express = require('express');
var app = express();
app.use(express.static('./public/'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/public");

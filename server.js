var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function(req, res) {
    console.log("Got request on / endpoint. Sending back a Hello World ....");
    res.send('<h3>Hello from NodeJS-v1  at </h3>'+ new Date());
});

app.get('/end_point1', function(req, res) {
    console.log("Got request on /end_point1 endpoint. Sending some json content ....");
    res.json({ company: 'Munisys' });
});


app.listen(8080, ip);
console.log('Server listening on 8080 ...');

module.exports = app;

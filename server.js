var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function(req, res) {
    console.log("Got request on / endpoint. Sending back a Hello World ....");
    res.send('<h3>Hello from NodeJS-v3  at </h3>'+ new Date());
});

app.get('/api/end_point1', function(req, res) {
    console.log("Got request on /end_point1 endpoint. Sending some json content ....");
    res.json({ company: 'Munisys' });
});

app.get('/api/end_point2', function(req, res) {
    console.log("Got request on /end_point2 endpoint. Sending some json content ....");
    res.json([{ user: 'Ayoub' }, { user: 'Mouad' }]);
});

app.get('*', function(req, res){
  res.status(404).send('what???');
});


app.listen(8080, ip);
console.log('Server listening on 8080 ...');

module.exports = app;

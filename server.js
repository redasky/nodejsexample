var express = require('express'),
    fs = require('fs'),
    app = express();

var app = express();

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function(req, res) {
    console.log("Got request on / endpoint. Sending back a Hello World ....");
    res.send('<h3>Hello and Welcome to Morocco football team Staff at </h3>'+ new Date());
});

app.get('/api/keepers', function(req, res) {
    console.log("Got request on /keepers endpoint. Sending goals keepers in json content ....");
    console.log(req);
    res.json([{ GoalKeeper1: 'BOUNOU' }, { GoalKeeper2: 'KAJOUI' }, { GoalKeeper3: 'TAGNAOUTI' }]);
});

app.get('/api/defenders', function(req, res) {
    console.log("Got request on /defenders endpoint. Sending some json content ....");
    res.json([{ user: 'AGERD' }, { user: 'SAISS' }, { user: 'HAKIMI' }, { user: 'ATIAT ALLAH' }]);
});

app.get('/api/middle', function(req, res) {
    console.log("Got request on /middle endpoint. Sending some json content ....");
    res.json([{ user: 'AMELAH' }, { user: 'AMRABAT' }, { user: 'OUNAHI' }]);
});

app.get('/api/attack', function(req, res) {
    console.log("Got request on /middle endpoint. Sending some json content ....");
    res.json([{ user: 'ZIYECH' }, { user: 'BOUFAL' }, { user: 'ENSSIRY' }]);
});

app.get('*', function(req, res){
  res.status(404).send('what???');
});


app.listen(8080, ip);
console.log('Server listening on 8080 ...');

module.exports = app;

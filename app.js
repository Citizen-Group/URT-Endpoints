// Node Endpoint Test App
var fs = require('fs');
var epm = require('./endpointManager');

var file = {
    "name" : "Doggy",
    "path" : "./"
}

epm.load(file);
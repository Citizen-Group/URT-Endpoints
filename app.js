/**
 * Universal Reporting Tool: Endpoint Template 
 * 
 * This project provides the template and validation for creating a URT Endpoint.
 * 
 * See: https://github.com/Citizen-Group/URT-Endpoints
 */
var fs = require('fs');
var epm = require('./endpointManager');

var file = {
    "name" : "Doggy",
    "path" : "./"
}

epm.load(file);
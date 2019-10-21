var mongoose = require('mongoose');
var Endpoints = require('../../models/endpoints/endpointsSchema');

// Connect to the main database
const uri = `mongodb://localhost/URT-DB`
const options = { useMongoClient: true };
mongoose.connect(uri, options);

mongoose.set('debug', true);

Endpoints.on('index', function (err) {
    if (err) {
        console.error('Endpoints index error: %s : ' + err, err);
    } else {
        console.info('Endpoints indexing complete');
    }
});

// Mock a City of Ottawa Endpoint
mongoose.model('Endpoints').create({
        pk_epid: '0000000001',
        client_information: {
            displayName: 'City of Ottawa',
            description: 'Grand Kingdom of Holes'
        },
        isActive: true,
        coverage: {
            type: "Polygon",
            coordinates: [
            [
                [
                -75.66078186035156,
                45.40399435412046
                ],
                [
                -75.69803237915039,
                45.39555704145539
                ],
                [
                -75.71554183959961,
                45.37011694768225
                ],
                [
                -75.70489883422852,
                45.34454475545541
                ],
                [
                -75.66301345825194,
                45.348767376116
                ],
                [
                -75.64859390258789,
                45.37650819002362
                ],
                [
                -75.66078186035156,
                45.40399435412046
                ]
            ]] 
        },
        servicePaths: {
            GEOAPIV2: {
                api_key: { 
                    test: "upxH1uGMCboY3qrXKGRmKWdYaxhaGiDr",
                    dev: "upxH1uGMCboY3qrXKGRmKWdYaxhaGiDr",
                    production: null // Key must be safeguarded
                },                            
                url: { 
                    test: 'https://city-of-ottawa-dev.apigee.net/open311/v2/',
                    dev: 'https://city-of-ottawa-dev.apigee.net/open311/v2/',
                    production: 'https://city-of-ottawa-prod.apigee.net/open311/v2/'
                }, 
                postfix: 'requests.json',
                limits: {
                    test: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    },
                    dev: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    },
                    production: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    }
                }
            },
            EMAIL: {
                url: { 
                    test: "Blue_lt@hotmail.com/",
                    dev: "Blue_lt@hotmail.com/",
                    production: "Blue_lt@hotmail.com/",
                }, 
                limits: {
                    test: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    },
                    dev: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    },
                    production: {
                        interval: { duration: 6000, max: 8 },
                        threshold: { duration: null, max: null }
                    }
                }
            }
        },
        serviceTypes: {
            POTHOLES: {
                GEOAPIV2: {
                    service_code: '2000164-2'
                },
                EMAIL: {
                    subject: '[URT] Pothole Submission',
                    body: 'This is an automated email informing you that you have a new pothole service request. \n'
                    + 'We attempted to contact you via your API but were unable to make a connection'
                }
            }
        }
    }, function(err, pass) {
        if (err){
            console.log("--------------------------------------------------");
            console.log("Errored: " + err);
            console.log("--------------------------------------------------");
        } else {
            console.log("--------------------------------------------------");
            console.log("Created result: " + pass);
            console.log("--------------------------------------------------");
        }
        
        mongoose.connection.close()
    });
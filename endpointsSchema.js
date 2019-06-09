/**
 * EndPointSchema.js
 * 
 * Each endpoint represents a client we can do business with.
 * For security and other reasons. Keep business data out of here.
 *
 * TODO: We will need to make location many large polygons of many points.
 * TODO: Handle conflicts where two parties occupy the same place.
 * 
 * _id (hidden) - is used for localization/ref/ect
 * displayName  - visual name to display in local language
 * description  - additional information needed to describe the city
 * isActive     - is a bool that reps if we still work this client
 * coverage     - is the area supported by this endpoint
 * servicePaths - references all the diffrent ways we can communicate with this endpoint. You may add them as needed.
 *                The default two for this application are chosen. Paths are expanded by servicepaths.js.
 *                Absence of a path means no support. Ordered by priority.
 * Limits       - Represents the known API limits for working with this endpoint.
 *   Interval
 *    Duration  - Represents the span of time before the interval 'counter' rolls over. (24h, 10 Minutes, ect). If null there is interval based limit.
 *    Max       - Represents the max amount of requests that can be sent though this servicePath per interval. (8, 100, 120000). If null there is no max limit.
 *   Threshold
 *    Duration  - Represents the span of time before the threshold 'counter' rolls over. (10ms, 1s, 5m). If null there is threshold limit.
 *    Max       - Represents the max amount of requests that can be sent before the threshold limit is hit. If null there is threshold limit. * 
 * serviceTypes - represents the products/objects this endpoint is able to report. This model holds the subdata
 *                needed to properly send a service request/ticket to this endpoint. Is paired with service paths.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endpointsSchema = new Schema({
    pk_epid: String,
    client_information: { 
        displayName: { type: String, Default: "" },
        description: { type: String, Default: "" },
    },
    isActive: { type: Boolean, Default: true },
    coverage: { type: { type: String, default: "Polygon" }, coordinates : { type : [] } },
    servicePaths: {
        GEOAPIV2: {
            api_key: { 
                test: { type: String },
                dev: { type: String },
                production: { type: String }
            },
            url: { 
                test: { type: String },
                dev: { type: String },
                production: { type: String }
            },
            postfix: { type: String },
            limits: {
                test: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }   
                },
                dev: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }    
                },
                production: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }    
                }
            }
        },    
        EMAIL: {
            url: { 
                test: { type: String },
                dev: { type: String },
                production: { type: String }
            },
            limits: {
                test: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }   
                },
                dev: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }    
                },
                production: {
                    interval: {
                        duration: { type: Number },
                        max: { type: Number}
                    },
                    threshold: {
                        duration: { type: Number },
                        max: { type: Number}
                    }    
                }
            }
        }, 
    },
    // Manual implmentation of service types. 
    // We need this because behavior is custom per end point
    // Consider rolling in the endpoint discovery here with auto parsing
    // This should also be exposed to the clients for modifications
    // Each service type is paired with all services paths that can handle it.
    serviceTypes: {
        POTHOLES: {
            GEOAPIV2: {
                service_code: { type: String }     // Service ID
            },
            EMAIL: {
                subject: {type: String },
                body: {type: String}
            }
        }
    }
});

endpointsSchema.index({coverage: "2dsphere"});

module.exports = mongoose.model('Endpoints', endpointsSchema);

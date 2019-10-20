var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attribute = new Schema({
    variable: Boolean,  // True if requires input, False if attrib is for info/display
    code: String,
    datatype: String,
    required: Boolean,
    datatype_description: String,
    order: Number,
    description:  String,     // Decription of the attrib. Displayed as info message to user on expected fields
    values:[
      {
        key: String,
        name: String
      }
    ],
    expected: {
      value: { type: String, default: "" },  // if not "", this attrib has an expected value. Validate it matches on input.
      errMsg: { type: String }, // The msg given when the values don't match
    }
    

    // Custom ontop of the API
    /** 
     * If the field 'autoAttribute' exists here. Then this attribute is an 'automatically mapped' attribute
     * Auto mapped attribute solve the problem of filling in common information like user information.
     * A common example is: Fname, Lname, Address: houseNum, apt, street.
     * 
     * To do an automatic mapping we need to know:
     * - Which external attribute is being filled in
     *     - That will be: attribute that this data block is found in
     * - Which internal field(s) does this attribute use to get overwritten
     * - How does this attribute get overwritten (custom function)
     * 
     * This can be solved with an common ID. As the API standarizes the attribute, 
     * we know the key/value choices and thus we have a function that relys on that mapping 
     */
    
    })

module.exports = mongoose.model('attribute', attribute);
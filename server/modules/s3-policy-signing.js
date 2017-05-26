var crypto = require('crypto');
var base64 = require('base-64');
var utf8 = require('utf8');

// in the event we need to dynamicall generate the expiry, here is where we do it:

/*

var currentTime = new Date().getTime()
var newExpiry = currentTime + (5 * 60 * 1000);
var expiryDate = new Date(newExpiry).toISOString()

*/



var policy = {
  "expiration": "2017-12-30T12:00:00.000Z", // this is proper ISO8061 formatting
  "conditions": [
    {"bucket": "sofa-apple-tree"},
    ["starts-with", "$key", ""], //references a folder hierarchy.  We're not using that here so no string is necessary.
    {"acl": "public-read"}, //I want anyone to be able to read the file
    {"success_action_redirect": "http://localhost:5000/success.html"}
  ]
}

var policyString = JSON.stringify(policy) // turns the JSON object into a string
var bytes = utf8.encode(policyString); // encodes the policyString into UTF-8
var encodedString = base64.encode(bytes); //encodes the UTF-8 into b64
console.log('the encoded string is: ', encodedString);





module.exports = { policy: encodedString };

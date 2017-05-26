var crypto = require('crypto');
var base64 = require('base-64');
var utf8 = require('utf8');
var Crypto = require('crypto-js');
var key = process.env.AWS_SECRET_KEY;

// in the event we need to dynamicall generate the expiry, here is where we do it:

/*

var currentTime = new Date().getTime()
var newExpiry = currentTime + (5 * 60 * 1000);
var expiryDate = new Date(newExpiry).toISOString()

*/

// this will properly format the dateStamp for the signing key and the policy
var dateStamp = new Date().toISOString().split("-").join("").substr(0,8);
var dateStampZulu = new Date().toISOString().split("-").join("").substr(0,8) + 'T000000Z';
var regionName = 'us-east-2';
var serviceName = 's3';


function getSignatureKey(Crypto, key, dateStamp, regionName, serviceName) {
    console.log('running getSignatureKey()... ');
    var kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
    var kRegion = Crypto.HmacSHA256(regionName, kDate);
    var kService = Crypto.HmacSHA256(serviceName, kRegion);
    var kSigning = Crypto.HmacSHA256("aws4_request", kService);
    return kSigning;
  }

function calculateSignature(signingKey, stringToSign){
  console.log('calculating signature....');
  var signature = Crypto.HmacSHA256(signingKey,stringToSign)
  console.log('calculated signature is: ', signature);
  return signature;
}




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

var signingKey = getSignatureKey(Crypto, key, dateStamp, regionName, serviceName);

var stringToSign = encodedString;

calculateSignature(signingKey, stringToSign)









module.exports = "";

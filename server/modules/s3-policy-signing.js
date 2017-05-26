var crypto = require('crypto');


var policy = {
  "expiration": "2017-12-30T12:00:00.000Z",
  "conditions": [
    {"bucket": "sofa-apple-tree"},
    ["starts-with", "$key", ""], //references a folder hierarchy.  We're not using that here so no string is necessary.
    {"acl": "public-read"}, //I want anyone to be able to read the file
    {"success_action_redirect": "http://localhost:5000/success.html"},
    ["starts-with", "$Content-Type", ""], // any content type
    {"x-amz-server-side-encryption": "AES256"},
    {"x-amz-credential": "AKIAJD7MUGSNUZEG3X4A/20151229/us-east-1/s3/aws4_request"},
    {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
    {"x-amz-date": "20151229T000000Z" }
  ]
}

var policyJSON = JSON.stringify(policy)

var buffer = new Buffer(policyJSON);
var encodedString = buffer.toString('base64');
console.log('the encoded string is: ', encodedString);





module.exports = { policy: encodedString };

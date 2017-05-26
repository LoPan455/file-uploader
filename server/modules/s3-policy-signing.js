var crypto = require('crypto');

var expiration = new Date()






{ "expiration": "2017-12-30T12:00:00.000Z",
  "conditions": [
    {"bucket": "sofa-apple-tree"},
    {"starts-with", "$key", ""}, //references a folder hierarchy.  We're not using that here.
    {"acl": "public-read"}, //I want anyone to be able to read the file
    {"success_action_redirect": "http://localhost:5000/success.html"},
    {"starts-with", "$Content-Type", ""}, // any content type
    {"x-amz-meta-uuid": "14365123651274"},
    {"x-amz-server-side-encryption": "AES256"},
    {"starts-with", "$x-amz-meta-tag", ""},
    {"x-amz-credential": "AKIAIOSFODNN7EXAMPLE/20151229/us-east-1/s3/aws4_request"},
    {"x-amz-algorithm": "AWS4-HMAC-SHA256"},
    {"x-amz-date": "20151229T000000Z" }
  ]
}





module.exports: { s3Configuration:s3Configuration }

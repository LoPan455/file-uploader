var express = require('express');
var app = express();
var path = require('path');
var router = require('./server/routes/routes.js')

app.use('/inboundURLbase',router)

// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});

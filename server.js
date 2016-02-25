<<<<<<< HEAD
// server.js
'use strict';

// SERVER SETUP
//===================================================
var express = require('express');
const app = express();

app.use(express.static('/'));

app.get('/', function(req, res) {
  res.sendfile("copy-paste.html");
});

// START SERVER
//===================================================
app.listen('3000', function() {
  console.log("Running Express on http://localhost:3000");
});
=======
// server.js
'use strict';

// SERVER SETUP
//===================================================
var express = require('express');
const app = express();

app.use(express.static('/'));

app.get('/', function(req, res) {
  res.sendfile("copy-paste.html");
});

// START SERVER
//===================================================
app.listen('3000', function() {
  console.log("Running Express on http://localhost:3000");
});
>>>>>>> origin/master

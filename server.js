// server.js
'use strict';

// SERVER SETUP
//===================================================
var express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send("Hi, This is Express");
});

// START SERVER
//===================================================
app.listen('3000', function() {
  console.log("Running Express");
});

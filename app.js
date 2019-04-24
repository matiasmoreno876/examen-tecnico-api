'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var testRouter = require('./routers/test-router');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1', testRouter);

module.exports = app;

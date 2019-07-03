var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/college";
var bodyParser= require('body-parser');
var promise = require('promise');
var express = require('express');
var path=require('path')
var app = express();
var http = require('http');

// MongoClient.connect(url)

// .then(function(db){
// app.db=db;
// console.log("mongo is connected successfully");
// })
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static(path.join(__dirname,'./views')));

var hostport=Number("9600");

http.createServer(app).listen(hostport);


console.log("Server Running Port: "+hostport);

var WebRoutes = require('./routes.js');
var WebRoutes = new WebRoutes(app);

WebRoutes.init();

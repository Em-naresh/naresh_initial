var MongoClient = require('mongodb').MongoClient;
var url = "mongodb:"//127.0.01:27017/college";
var bodyParser= require('body-parser');
var promise = require('promise');
var express = require('express');
var app = require('app');
var http = require('http');
MongoClient.connect(url)
.then(function(db){
app.db=db;
})
app.user(express.static(path.join(_dirname,'./client')));
var hostport=Number("8585");
http.createServer(app).Listen(hostport);
console.log("Server Running Port: "+hostport);
var WebRoutes = require('router.js');
var WebRoutes = new WebRoutes(app);
WebRoutes.init();

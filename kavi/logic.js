var Promise =require('promise');
var express=require('express');
var router=express.Router();
var UIRoutes=function(app) {
this.app = app;
this.actionInstance =new Action(app);
};

module.exports = UIRoutes;
UIRoutes.protype.init=function(){
	var self=this;
	var app=this.app;
	console.log("this",this);


	app.get('/login/',function(req,res){
	console.log("req",req);
	res.json('req')
	});

	
	// self.actionInstance.login(req,function(err,result){
 //     res.json(result);
 // })



	// app.post("/signup/",function(req,res){
	// console.log("dd");
	// res.json(dd)
	// });


	// app.put("/update/:phoneNumber",function(req,res){
	// console.log("dd")
	// res.json(dd)
	// });

	// app.Delete("/delete/:phoneNumber",function(req,res){
	// console.log("dd")
	// res.json(dd)
	// });
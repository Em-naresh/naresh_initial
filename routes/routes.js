var action =require('../action/action.js');
var Promise =require('promise');
var express=require('express');
var UIRoutes=function(app) {
this.app = app;

this.actionInstance =new action(app);

};
module.exports = UIRoutes;


UIRoutes.prototype.init=function(){

	var self=this;
	var app=this.app;
	console.log("this",this);



	app.get('/signUp',function(req,res){

		console.log("reee",res);
		self.actionInstance.insertdata(req.query,function(err,result){
     		res.send(result);

		});


});


	app.post('/login',function(req,res){

	console.log(req.body)    
	self.actionInstance.find(req.body,function(err,result){
	res.send(result)
	
	});

});	

	app.put('/change',function(res,req){

	self.actionInstance.update(res.body,function(err,result){
	res.send(result)
	
	});

});

	app.delete('/remove',function(res,req){
	console.log(res.query)
	self.actionInstance.delete(res.query,function(err,result){
	res.send(result)
		});
	});
};


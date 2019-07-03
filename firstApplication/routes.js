var action =require('./action.js');
var Promise =require('promise');
// var express=require('express');
// var router=express.Router();
var UIRoutes=function(app) {
this.app = app;

this.actionInstance =new action(app);

};
module.exports = UIRoutes;


UIRoutes.prototype.init=function(){
	var self=this;
	var app=this.app;
	//console.log("this",this);

	app.get('/login',function(req,res){
		console.log(req.query);
		res.send('req')
	});

	app.get('/login/:userEmail',function(req,res){
		console.log(req.params.userEmail);
		res.send('req')
	});


	app.post("/login",function(req,res){
		console.log(req.body);
		res.send('dd')
	});


	app.put("/login/:userEmail",function(req,res){
		console.log(req.params.userEmail)
		console.log(req.body);
		res.send('req')
	});

	app.delete("/login/:userEmail",function(req,res){
		console.log(req.params.userEmail)
		res.send('req')
	});





// 	console.log("ress",res);
// 	self.actionInstance.login(req,function(err,result){
//      console.log("result",result);
//      if(result)
//      {
//      res.json(result);
//  }
//  else 
//  {
//  	res.json(err);
//  }
// });
// });
}

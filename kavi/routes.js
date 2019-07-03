//r action =require('./action.js');
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

app.get('/login',function(req,res){
	console.log("req",req);
	// console.log("ress",res);
     res.send("req")
// 	self.actionInstance.login(req,function(err,result){
//      console.log("result",result);
//      if(result)
//      {
//      res.json(result);
//     }
//  else 
//  {
//  	res.json(err);
//  }
// });
});



 app.post("/login",function(req,res){
	 console.log("dd");
	 res.send('req.body')
	 });

	// app.put("/update/:phoneNumber",function(req,res){
	//  console.log("dd")
	//  res.json(dd)
	// });

	//  app.Delete("/delete/:phoneNumber",function(req,res){
	//  console.log("dd")
	//  res.json(dd)
	// });
}

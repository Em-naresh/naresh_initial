var service =require('../service/service.js');
var Promise =require('promise');


var ApiActions = function (app) {

this.app = app;
this.apiServiceInstance = new service(app);

};

module.exports = ApiActions;

ApiActions.prototype.insertdata = function (req, callback) {

    var self = this;
    var resObject = {};
    var errorResponseObj = {};
    

    var tablename='facebook'
    self.apiServiceInstance.insert(req,tablename,function(err,result){
    	if(err) {
    		errorResponseObj['status']=false
    		errorResponseObj['data']={}
    		callback(err,errorResponseObj)
    	}else {
    		resObject['status']=true
    		resObject['data']=result
    	}
})
};
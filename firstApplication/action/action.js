var service =require('./service.js');
var Promise =require('promise');


var ApiActions = function (app) {
this.app = app;
this.apiServiceInstance = new service(app);
};

module.exports = ApiActions;
ApiActions.prototype.login = function (req, callback) {
    var self = this;
    var resObject = {};
    var errorResponseObj = {};
    var reqObj=req.query;


    var condition = {
        name : reqObj.name
    }


    var tableName="girls"

    self.apiServiceInstance.find(condition,{},tableName, function (err, result) {
        if (result == false) {
            errorResponseObj={
                status: false,
                data: {}
            }
            callback(err, errorResponseObj)
        } else {
            resObject={
                status:true,
                data:result
            }
            callback(err, resObject)
        }
    });
};

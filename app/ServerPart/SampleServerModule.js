/**
 * 
 * @author jskonst
 * @module
 * @public
 */ 
function SampleServerModule() {
    var self = this, model = this.model;
    var pusher = new Module("test");
    /** Url for using this function - 
    *   application/api?__type=14&__moduleName=SampleServerModule&__methodName=hello&__param[]=first&__param[]=second ....
    */
    self.hello = function(param,param2){
      Logger.info("hello server " + param + " " + param2);  
    };
    
    self.passParam = function(param,param2){
      pusher.pusher(param);
    };
    
}

/**
 * 
 * @author jskonst
 * @public
 * @stateless
 */
function test() {
    var self = this;
    var i = 0;

    self.execute = function(counter) {
         Logger.info("counter " + counter);
        if (self.http) {
            var body = self.http.request.body;
            Logger.info(principal.name);
            Logger.info("i'ma here");
//            var servicesChecker = Modules.get("authorizer");
//            var isInRole = servicesChecker.isUserInRole();
            var pusher = com.eas.server.websocket.TaggedFeedEndPoint;
            pusher.broadcast("MyTag", counter);
            Logger.info(pusher);
        }
    };
    
    self.pusher = function(aCode) {
            var pusher = com.eas.server.websocket.TaggedFeedEndPoint;
            pusher.broadcast("MyTag", aCode);
            Logger.info("pusher");
    };
    
}

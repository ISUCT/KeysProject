/**
 * 
 * @author jskonst
 * @rolesAllowed admin
 */
function WebSockets() {
    var self = this, model = this.model, form = this;
    var value = 0;
    var setv = new ServerModule("test");
    var sampleServ = new ServerModule("SampleServerModule");
    var webSocket = null;
    addEventsListener();

//    model.requery(/*function(){}*/);



    function addEventsListener() {
        Logger.info("adding listener");
        var eventsTypes = "";
        var delimiter = "";

        if (webSocket) {
            webSocket.close();
            webSocket = null;
        }
        var wsProtocol = "ws:";
        if (window.location.protocol == 'https:')
            wsProtocol = "wss:";
        webSocket = new WebSocket(wsProtocol + "//" + window.location.host + window.location.pathname.substr(0, window.location.pathname.lastIndexOf("/")) + "/taggedfeed");
        console.log(webSocket);
        var test = webSocket;
        webSocket.onopen = function() {
            Logger.info("onOpen");
            console.log(webSocket);
            Logger.info(test);
            webSocket.send("MyTag");
            Logger.info("onOpen End");
        };

        webSocket.onerror = function(aError) {
            Logger.info("onError");
            Logger.info(aError);
        };

        webSocket.onmessage = function(aEventData) {
            Logger.info("onMessage here");
            form.formattedField.text = Number(aEventData.data);
            var newForm = new testForm(aEventData.data);
            newForm.showModal();
        };
        webSocket.onclose = function() {
            Logger.info("onClose");
        };
    }

//    form.btnUp.onActionPerformed = function (event) {
//        value += 1;
//        form.formattedField.text = value;
//        setv.execute();
//    };
//
//    form.btnDown.onActionPerformed = function (event) {
//        value -= 1;
//        form.formattedField.text = value;
//    };

    function btnUpActionPerformed(evt) {//GEN-FIRST:event_btnUpActionPerformed
        value += 1;
        form.formattedField.text = value;
        setv.execute(value);
    }//GEN-LAST:event_btnUpActionPerformed

    function btnDownActionPerformed(evt) {//GEN-FIRST:event_btnDownActionPerformed
        value -= 1;
        form.formattedField.text = value;
        setv.execute(value);
    }//GEN-LAST:event_btnDownActionPerformed
}

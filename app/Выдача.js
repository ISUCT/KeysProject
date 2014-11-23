/**
 * 
 * @author ксюша
 */
function Vidacha() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
        // TODO Добавьте свой код:
        model.save();
    }//GEN-LAST:event_saveActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
       var teacher = model.qSearchTeacherByID.cursor.teacher_id;
       model.qKeysInfo.insert();
       model.qKeysInfo.cursor.teacher = teacher;
       model.qKeysInfo.cursor.datein = new Date().getTime();
    }//GEN-LAST:event_buttonActionPerformed
    var callback = function(returnedId){
        model.params.teacherId = returnedId;
        model.requery();
    };
    
    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        var search = new WatchInfo();
        search.showModal(callback);
    }//GEN-LAST:event_button1ActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        model.qKeysInfo.deleteRow();
    }//GEN-LAST:event_button2ActionPerformed
}

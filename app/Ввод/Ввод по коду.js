/**
 * 
 * @author jskonst
 */
function Ввод_по_коду() {
    var self = this, model = this.model, form = this;

    // TODO : place your code here
    form.modelDate.value = "";
    model.qKeysInfo.insert();
    
    function txtTeacherActionPerformed(evt) {//GEN-FIRST:event_txtTeacherActionPerformed
        model.params.teacherId = form.txtTeacher.text;
        model.requery(function() {
            form.txtTeacher.text = model.qSearchTeacherByID.cursor.lastname;
            form.txtKey.focus();
        }, function() {
            form.txtTeacher.text = "";
            alert("Повторите ввод");
        });
    }//GEN-LAST:event_txtTeacherActionPerformed

    function txtKeyActionPerformed(evt) {//GEN-FIRST:event_txtKeyActionPerformed
        model.params.keyid = form.txtKey.text;
        model.requery(function() {
            form.txtKey.text = model.qSearchRoomByID.cursor.rnumber;
            
            
        }, function() {
            form.txtKey.text = "";
            alert("Повторите ввод");
        });
    }//GEN-LAST:event_txtKeyActionPerformed

    function button3ActionPerformed(evt) {//GEN-FIRST:event_button3ActionPerformed
      model.qKeysInfo.cursor.teacher = model.qSearchTeacherByID.cursor.teacher_id;
      model.qKeysInfo.cursor.room = model.qSearchRoomByID.cursor.room_id;
      model.qKeysInfo.cursor.keystatus = model.qStatus.cursor.keystatus_id;
      
      model.save();
    }//GEN-LAST:event_button3ActionPerformed
}

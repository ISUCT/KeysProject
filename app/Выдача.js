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
       var teacher = model.teacherInform.cursor.teacher_id;
       model.qKeysInfo.insert();
       model.qKeysInfo.cursor.teacher = teacher;
    }//GEN-LAST:event_buttonActionPerformed
}

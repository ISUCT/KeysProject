/**
 * 
 * @author ксюша
 */
function Преподаватели() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        // TODO Добавьте свой код:
        model.teacherInform.insert();
    }//GEN-LAST:event_addActionPerformed

    function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
        // TODO Добавьте свой код:
        model.save();
    }//GEN-LAST:event_SaveActionPerformed

    function DeleteActionPerformed(evt) {//GEN-FIRST:event_DeleteActionPerformed
        // TODO Добавьте свой код:
        if (confirm("удалить?")) {
            model.teacherInform.deleteRow();
    }//GEN-LAST:event_DeleteActionPerformed
}
}

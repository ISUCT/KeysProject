/**
 * 
 * @author ксюша
 */
function WatchInfo() {
    var self = this, model = this.model, form = this;

    // TODO : place your code here
    model.params.lastName = "%%";
    model.qSearchTeacher.requery();

    function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
        model.params.lastName = '%' + self.textField.text + '%';
        model.qSearchTeacher.requery();
    }//GEN-LAST:event_searchActionPerformed

    function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
        
    }//GEN-LAST:event_textFieldActionPerformed

    function btnCancelActionPerformed(evt) {//GEN-FIRST:event_btnCancelActionPerformed
        self.close();
    }//GEN-LAST:event_btnCancelActionPerformed

    function btnOkActionPerformed(evt) {//GEN-FIRST:event_btnOkActionPerformed
        
    }//GEN-LAST:event_btnOkActionPerformed

    function modelGridMouseClicked(evt) {//GEN-FIRST:event_modelGridMouseClicked
        if (evt.clickCount > 1) {
            self.close(model.qSearchTeacher.cursor.teacher_id);
        }
    }//GEN-LAST:event_modelGridMouseClicked
}

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
}

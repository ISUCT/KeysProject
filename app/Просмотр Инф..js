/**
 * 
 * @author ксюша
 */
function WatchInfo() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function searchActionPerformed(evt) {//GEN-FIRST:event_searchActionPerformed
        // TODO Добавьте свой код:
        self.model.params.rname = "%" + self.textField.text + "%";
        self.model.qAll.requery();
    }//GEN-LAST:event_searchActionPerformed

    function textFieldActionPerformed(evt) {//GEN-FIRST:event_textFieldActionPerformed
        // TODO Добавьте свой код:
        
    }//GEN-LAST:event_textFieldActionPerformed
}

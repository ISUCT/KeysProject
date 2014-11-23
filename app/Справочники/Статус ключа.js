/**
 * 
 * @author ксюша
 * @public
 */
function Статус_ключа() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function saveActionPerformed(evt) {//GEN-FIRST:event_saveActionPerformed
        // TODO Добавьте свой код:
        self.model.save();
    }//GEN-LAST:event_saveActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        // TODO Добавьте свой код:
        model.qSTATUS.insert();
    }//GEN-LAST:event_button1ActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        // TODO Добавьте свой код:
        if(confirm("Удалить?")){
            self.qSTATUS.deleteRow();
        }
    }//GEN-LAST:event_buttonActionPerformed
}

/**
 * 
 * @author Пользователь
 */
function Корпус() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        // TODO Добавьте свой код:
        model.qCorpus.insert();
    }//GEN-LAST:event_button1ActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        // TODO Добавьте свой код:
        if(confirm("Удалить?")){
            self.qCorpus.deleteRow();
        }
    }//GEN-LAST:event_buttonActionPerformed

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        // TODO Добавьте свой код:
        model.save();
    }//GEN-LAST:event_button2ActionPerformed
}

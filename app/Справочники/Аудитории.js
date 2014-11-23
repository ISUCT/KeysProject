/**
 * 
 * @author Пользователь
 */
function Аудитории() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        // TODO Добавьте свой код:
        model.save();
    }//GEN-LAST:event_button2ActionPerformed

    function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
        // TODO Добавьте свой код:
        if(confirm("Удалить?")){
            model.qOnlyRoom.deleteRow();
        }
    }//GEN-LAST:event_buttonActionPerformed

    function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
        // TODO Добавьте свой код:
        model.qOnlyRoom.insert();
    }//GEN-LAST:event_button1ActionPerformed
}

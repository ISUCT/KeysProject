/**
 * 
 * @author jskonst
 */
function Ввод_по_коду() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function txtUserActionPerformed(evt) {//GEN-FIRST:event_txtUserActionPerformed
        form.txtKey.focus();
        var code = Number(form.txtKey.text);
        model.params.teacherId = code;
        model.qSearchTeacherByID.requery(function(){
            form.txtKey.text = model.qSearchTeacherByID.cursor.lastname;
        });
    }//GEN-LAST:event_txtUserActionPerformed

    function txtKeyActionPerformed(evt) {//GEN-FIRST:event_txtKeyActionPerformed
        
    }//GEN-LAST:event_txtKeyActionPerformed
}

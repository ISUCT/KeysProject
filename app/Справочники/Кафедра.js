/**
 * 
 * @author ксюша
 */
function Кафедра() {
    var self = this, model = this.model, form = this;

    // TODO : place your code here

    function deleteActionPerformed(evt) {//GEN-FIRST:event_deleteActionPerformed
        // TODO Добавьте свой код: кнопка удаления
        if (confirm("удалить?")) {
            model.кафедры.deleteRow();

        }        // TODO Добавьте свой код:
    }//GEN-LAST:event_deleteActionPerformed

    function SaveActionPerformed(evt) {//GEN-FIRST:event_SaveActionPerformed
        // TODO Добавьте свой код:
        model.save();
    }//GEN-LAST:event_SaveActionPerformed

    function addActionPerformed(evt) {//GEN-FIRST:event_addActionPerformed
        // TODO Добавьте свой код:
        model.кафедры.insert();
    }//GEN-LAST:event_addActionPerformed
}

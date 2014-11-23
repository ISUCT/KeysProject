/**
 * 
 * @author ксюша
 */
function Edit() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function CathInfoActionPerformed(evt) {//GEN-FIRST:event_CathInfoActionPerformed
        // TODO Добавьте свой код:
        var CathInfo = new Кафедра();
        CathInfo.show();
    }//GEN-LAST:event_CathInfoActionPerformed

    function CorpusInfoActionPerformed(evt) {//GEN-FIRST:event_CorpusInfoActionPerformed
        // TODO Добавьте свой код:
        var CorpusInfo = new Корпус();
        CorpusInfo.show();
    }//GEN-LAST:event_CorpusInfoActionPerformed

    function TeachInfoActionPerformed(evt) {//GEN-FIRST:event_TeachInfoActionPerformed
        // TODO Добавьте свой код:
        var TeachInfo = new Преподаватели();
        TeachInfo.show();
    }//GEN-LAST:event_TeachInfoActionPerformed

    function RoomInfoActionPerformed(evt) {//GEN-FIRST:event_RoomInfoActionPerformed
        // TODO Добавьте свой код:
        var RoomInfo = new Аудитории();
        RoomInfo.show();
    }//GEN-LAST:event_RoomInfoActionPerformed

    function StatusInfoActionPerformed(evt) {//GEN-FIRST:event_StatusInfoActionPerformed
        // TODO Добавьте свой код:
        var StatusInfo = new Статус_ключа();
        StatusInfo.show();
    
    }//GEN-LAST:event_StatusInfoActionPerformed
}

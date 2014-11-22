/**
 * 
 * @author ксюша
 */
function MainForm() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here

    function KeyExtradActionPerformed(evt) {//GEN-FIRST:event_KeyExtradActionPerformed
        // TODO Добавьте свой код:
        var vidWindow = new Vidacha();
            vidWindow.show();
    
    }//GEN-LAST:event_KeyExtradActionPerformed

    function WatchInfoActionPerformed(evt) {//GEN-FIRST:event_WatchInfoActionPerformed
        // TODO Добавьте свой код:
        var watchI = new WatchInfo();
        watchI.show();
    }//GEN-LAST:event_WatchInfoActionPerformed

    function ReportActionPerformed(evt) {//GEN-FIRST:event_ReportActionPerformed
        // TODO Добавьте свой код:
    }//GEN-LAST:event_ReportActionPerformed

    function EditActionPerformed(evt) {//GEN-FIRST:event_EditActionPerformed
        // TODO Добавьте свой код:
        var EditInfo = new Edit();
        EditInfo.show();
    }//GEN-LAST:event_EditActionPerformed
}

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
    }//GEN-LAST:event_CorpusInfoActionPerformed

    function TeachInfoActionPerformed(evt) {//GEN-FIRST:event_TeachInfoActionPerformed
        // TODO Добавьте свой код:
        var TeachInfo = new Преподаватели();
        TeachInfo.show();
    }//GEN-LAST:event_TeachInfoActionPerformed
}

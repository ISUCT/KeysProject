/**
 * 
 * @author ксюша
 * @public
 */

define('Launch', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

//Вот весь этот код ниже надо приводить в божеский вид примерно так
//        form.KeyExtrad.onActionPerformed = function (evt) {
////            var vidWindow = new Vidacha();
////            vidWindow.show();
//        };

        self.show = function () {
            form.show();
        };

//
//        function WatchInfoActionPerformed(evt) {//GEN-FIRST:event_WatchInfoActionPerformed
//            // TODO Добавьте свой код:
//            var watchI = new WatchInfo();
//            watchI.show();
//        }//GEN-LAST:event_WatchInfoActionPerformed
//
//        function ReportActionPerformed(evt) {//GEN-FIRST:event_ReportActionPerformed
//            // TODO Добавьте свой код:
//        }//GEN-LAST:event_ReportActionPerformed
//
//        function EditActionPerformed(evt) {
//            var EditInfo = new Edit();
//            EditInfo.show();
//        }
    }
    return module_constructor;
});
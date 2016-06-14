/**
 * 
 * @author Пользователь
 */
define('KeyStatus', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        // function button2ActionPerformed(evt) {//GEN-FIRST:event_button2ActionPerformed
        // TODO Добавьте свой код:
        // }
    }
    return module_constructor;
});
//  model.save();
//  }//GEN-LAST:event_button2ActionPerformed

//function buttonActionPerformed(evt) {//GEN-FIRST:event_buttonActionPerformed
// TODO Добавьте свой код:
//  if(confirm("Удалить?")){
//    self.qROOM.deleteRow();
//    }
// }//GEN-LAST:event_buttonActionPerformed

// function button1ActionPerformed(evt) {//GEN-FIRST:event_button1ActionPerformed
// TODO Добавьте свой код:
//   model.qROOM.insert();
// }//GEN-LAST:event_button1ActionPerformed
//}
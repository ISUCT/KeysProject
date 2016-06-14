/**
 * 
 * @author Пользователь
 */
define('Teacher', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };
        model.requery();
        
        form.btnAdd.onActionPerformed = function () {
            model.qRooms.push({});
        };

        form.btnDelete.onActionPerformed = function () {
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.teacherInform.splice(model.teacherInform.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                    model.save();
                }
            }
        };

        form.btnSave.onActionPerformed = function () {
            model.save();
        };

    }
    return module_constructor;
});

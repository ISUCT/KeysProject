/**
 * 
 * @author Пользователь
 */
define('Room', ['orm', 'forms', 'ui'], function (Orm, Forms, Ui, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);

        self.show = function () {
            form.show();
        };

        form.btnAdd.onActionPerformed = function () {
            model.qRooms.push({});
        };

        form.btnDelete.onActionPerformed = function () {
            if (confirm("Удалить?")) {
                for (var i in form.modelGrid.selected) {
                    model.qRooms.splice(model.qRooms.indexOf(form.modelGrid.selected[i]), 1);  //Удаляем лишнее
                    model.save();
                }
            }
        };

        form.btnSave.onActionPerformed = function () {
            model.save();
        };
        
        model.requery();

    }
    return module_constructor;
});

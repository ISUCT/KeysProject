/**
 * 
 * @author ксюша
 * @public
 */

define('Launch', ['orm', 'forms', 'ui', 'KeysV', 'WatchInfo', 'Edit'],
        function (Orm, Forms, Ui, KeysV, WatchInfo, Edit, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);


                form.KeyExtrad.onActionPerformed = function (evt) {//
                    var frmKeyExtrad = new KeysV();
                    frmKeyExtrad.show();
                };

                form.WatchInfo.onActionPerformed = function () {
                    var frmWatchInfo = new WatchInfo();
                    frmWatchInfo.show();
                };

                form.Edit.onActionPerformed = function () {
                    var frmEdit = new Edit();
                    frmEdit.show();
                };

                self.show = function () {
                    form.show();
                };

            }
            return module_constructor;
        });
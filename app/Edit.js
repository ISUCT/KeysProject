/**
 * 
 * @author ксюша
 * @public
 */

define('Edit', ['orm', 'forms', 'ui', 'Teacher', 'Room', 'KeyStatus', 'Corpus'],
        function (Orm, Forms, Ui, Teacher, Room, KeyStatus, Corpus, ModuleName) {
            function module_constructor() {
                var self = this
                        , model = Orm.loadModel(ModuleName)
                        , form = Forms.loadForm(ModuleName, model);

                self.show = function () {
                    form.show();
                };

                form.TeachInfo.onActionPerformed = function () {
                    var frmTeacher = new Teacher();
                    frmTeacher.show();
                };

                form.RoomInfo.onActionPerformed = function () {
                    var frmRoom = new Room();
                    frmRoom.show();
                };
                form.StatusInfo.onActionPerformed = function () {
                    var frmKeyStatus = new KeyStatus();
                    frmKeyStatus();
                };
                form.CorpusInfo.onActionPerformed = function () {
                    var frmCorpus = new Corpus();
                    frmCorpus.show();
                };
            }
            return module_constructor;
        });
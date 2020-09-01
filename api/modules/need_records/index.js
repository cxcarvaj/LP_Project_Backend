const NeedRecordController = require("./need_record-controller");
module.exports = (app) =>{
    app.route("/needrecords/register")
        .post(NeedRecordController.publish);
    app.route("/needrecords/consult")
        .get(NeedRecordController.consult);
    app.route("/needrecords/update/:id")
        .put(NeedRecordController.update);
    app.route("/needrecords/delete/:id")
        .delete(NeedRecordController.clean);
};
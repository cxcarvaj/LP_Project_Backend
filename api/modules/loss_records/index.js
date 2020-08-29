const LossRecordController = require("./loss_record-controller");
module.exports = (app) =>{
    app.route("/lossrecords/register")
        .post(LossRecordController.publish);
    app.route("/lossrecords/consult")
        .get(LossRecordController.consult);
    app.route("/lossrecords/update/:id")
        .put(LossRecordController.update);
    app.route("/lossrecords/delete/:id")
        .delete(LossRecordController.clean);
};
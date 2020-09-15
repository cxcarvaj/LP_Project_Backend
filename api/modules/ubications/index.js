const UbicationsController = require("./ubications-controller");
module.exports = (app) =>{
    app.route("/ubications/register")
        .post(UbicationsController.publish);
    app.route("/ubications/consult")
        .get(UbicationsController.consult);
    app.route("/ubications/consult/:id")
        .get(UbicationsController.consultByID);
    app.route("/ubications/update/:id")
        .put(UbicationsController.update);
    app.route("/ubications/delete/:id")
        .delete(UbicationsController.clean);
};
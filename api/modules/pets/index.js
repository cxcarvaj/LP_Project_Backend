const PetsController = require("./pets-controller");
module.exports = (app) =>{
    app.route("/pets/register")
        .post(PetsController.publish);
    app.route("/pets/consult")
        .get(PetsController.consult);
    app.route("/pets/update/:id")
        .put(PetsController.update);
    app.route("/pets/delete/:id")
        .delete(PetsController.clean);
};
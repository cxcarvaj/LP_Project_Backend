const FoundationsController = require("./foundation-controller");
module.exports = (app) =>{
    app.route("/foundations/register")
        .post(FoundationsController.publish);
    app.route("/foundations/consult")
        .get(FoundationsController.consult);
    app.route("/foundations/update/:id")
        .put(FoundationsController.update);
    app.route("/foundations/delete/:id")
        .delete(FoundationsController.clean);
};
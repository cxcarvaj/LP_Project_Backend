const UsersController = require("./users-controller");
module.exports = (app) =>{
    app.route("/users/register")
        .post(UsersController.publish);
    app.route("/users/consult")
        .get(UsersController.consult);
    app.route("/users/update/:username")
        .put(UsersController.update);
    app.route("/users/delete/:username")
        .delete(UsersController.clean);
};
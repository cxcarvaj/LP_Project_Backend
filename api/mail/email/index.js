const EmailController = require("./email-controller");
module.exports = (app) =>{
    app.route("/send")
        .post(EmailController.send);
   
};
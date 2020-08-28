var nodemailer = require("nodemailer");

async function send(req, res, next) {
  var transport = {
    host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  };

  var transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take messages");
    }
  });

  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone = req.body.cell_phone;
  var email = req.body.email;
  var detail = req.body.detail;
  var zone = req.body.zone;
  var content = ``;

  var mail = {
    from: email,
    to: "", // Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    html: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
}

module.exports = {
  send,
};

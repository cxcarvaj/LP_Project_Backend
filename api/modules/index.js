const express = require("express");
const app = express();

require("./users")(app);
require("./pets")(app);
require("./loss_records")(app);
require("./need_records")(app);
require("./foundations")(app);
require("./ubications")(app);
require("../mail/email")(app);
module.exports=app;
let express = require("express");
let app = express();

require("./config/static-files")(express, app);

module.exports = app;

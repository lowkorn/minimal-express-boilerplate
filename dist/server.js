"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _member = require("./routes/member");

var _member2 = _interopRequireDefault(_member);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import
var app = (0, _express2.default)();
// import mongoose from "mongoose";

(0, _member2.default)(app);
app.get("/", function (req, res) {
  return res.send("test");
});
// app.get("/member", (req, res) => {
//   console.log("Hello, member");
// });

app.listen(3000, function () {
  return console.log("Example app listening on port 3000!");
});
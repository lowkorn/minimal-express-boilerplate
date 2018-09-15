"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Member = function Member(route) {
  route.get("/member", function (req, res) {
    res.send("Hello,member");
  });
};

exports.default = Member;
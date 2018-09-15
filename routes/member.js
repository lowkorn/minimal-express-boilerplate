import { Router } from "express";

const MemberRouter = Router();
const route = MemberRouter.route("/");

route.get(function(req, res) {
  res.status(200).send("hello users");
});

export default MemberRouter;

import { Router } from "express";

const AuthRouter = Router();
const route = AuthRouter.route("/");

route.get(function(req, res) {
  res.status(200).send("Just login.");
});

export default AuthRouter;

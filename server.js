import express from "express";
import yargs from "yargs";
import yaml from "js-yaml";
import fs from "fs";

import AuthRouter from "./routes/auth";
import MemberRouter from "./routes/member";

const ALLOWED_ENV = ["local", "production"];

const flags = yargs.argv;
let env = ALLOWED_ENV.includes(flags.e) ? flags.e : "local";
let config = {};
try {
  config = yaml.safeLoad(fs.readFileSync(`./configs/${env}.yaml`, "utf8"));
} catch (error) {
  console.error(error.message);
  throw ("Error read config with message: ", error.message);
}

const app = express();
const apiV1 = express.Router();

apiV1.use("/auth", AuthRouter).use("/member", MemberRouter);
app.use("/api/v1", apiV1);

app.get("/ping", (req, res) => res.send("pong."));
app.listen(3000, () => console.log("Starting app listening on port 3000!"));

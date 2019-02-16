import express from "express";
import _debug from "debug";
import { autoLogin } from "../middlewares";

const router = express.Router();
const debug = _debug("server:route:top");

router.get("/", autoLogin, (req, res) => {
  res.render("index");
});

export default router;

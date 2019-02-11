import express from "express";
import _debug from "debug";
import autoLogin from "../utils/autoLogin";

const router = express.Router();
const debug = _debug("server:route:top");

router.get("/", autoLogin, (req, res) => {
  res.render("index");
});

export default router;

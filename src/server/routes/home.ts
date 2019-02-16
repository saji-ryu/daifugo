import express from "express";
import _debug from "debug";
import { sessionCheck } from "../middlewares";

const router = express.Router();
const debug = _debug("server:route:home");

router.get("/", sessionCheck, (req, res) => {
  res.render("index");
});

export default router;

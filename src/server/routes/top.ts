import express from "express";
import _debug from "debug";

const router = express.Router();
const debug = _debug("server:route:top");

router.get("/", (req, res) => {
  res.render("index");
});

export default router;

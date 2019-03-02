import express from "express";
import _debug from "debug";

import { userData } from "../Memory";

const router = express.Router();
const debug = _debug("route:debug");

router.get("/", (req, res) => {
  res.send(userData);
});

export default router;

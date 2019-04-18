import express from "express";
import _debug from "debug";

import { userData, roomData, tableData } from "../Memory";

const router = express.Router();
const debug = _debug("server:route:debug");

router.get("/user", (req, res) => {
  res.send(userData);
});

router.get("/room", (req, res) => {
  res.send(roomData);
});
router.get("/table", (req, res) => {
  res.send(tableData);
});

export default router;

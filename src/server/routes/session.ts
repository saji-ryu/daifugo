import express from "express";
import _debug from "debug";
import { SessionInfo } from "../../interfaces";

const router = express.Router();
const debug = _debug("server:route:session");

router.get("/", (req, res) => {
  if (req.session) {
    if (req.session.userName && req.session.userId) {
      const resData: SessionInfo = {
        userName: req.session.userName,
        userId: req.session.userId,
        // FIXME:no決め打ち
        type: "twitter",
        auth: true,
      };
      res.send(resData);
    } else {
      const resData: SessionInfo = {
        userName: "",
        userId: "",
        type: "",
        auth: false,
      };
      res.send(resData);
    }
  } else {
    const resData: SessionInfo = {
      userName: "",
      userId: "",
      type: "",
      auth: false,
    };
    res.send(resData);
  }
});

export default router;

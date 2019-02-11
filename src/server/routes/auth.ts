import express from "express";
import passport from "passport";
import _debug from "debug";

const router = express.Router();
const debug = _debug("server:route:auth");

router.get("/twitter", passport.authenticate("twitter"));

router.get(
  "/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/" }),
  (req, res) => {
    debug(`auth success : ${req.user.id}`);
    req.session.userName = req.user.username;
    req.session.userId = req.user.id;
    res.redirect("/");
  }
);

export default router;

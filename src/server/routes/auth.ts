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
    debug(`auth success : { id:${req.user.id}, name:${req.user.username} }`);
    req.session.userName = req.user.username;
    req.session.userId = req.user.id;
    res.redirect("/home");
  }
);

export default router;

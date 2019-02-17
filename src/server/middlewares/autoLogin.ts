import express from "express";
import _debug from "debug";

const debug = _debug("server:middleware:autoLogin");

const autoLogin = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session) {
    if (req.session.userName && req.session.userId) {
      debug('session found. redirect to "/home"');
      res.redirect(`/home`);
    } else {
      debug("session not found");
      next();
    }
  } else {
    debug("session not found");
    next();
  }
};

export default autoLogin;

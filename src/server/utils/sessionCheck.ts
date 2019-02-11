import express from "express";
const sessionCheck = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session) {
    if (req.session.userName && req.session.userId) {
      next();
    } else {
      res.redirect(`/`);
    }
  } else {
    res.redirect(`/`);
  }
};

export default sessionCheck;

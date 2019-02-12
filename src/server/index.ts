import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import socketIO from "socket.io";
import passport from "passport";
import { Strategy } from "passport-twitter";

import { routeAuth, routeHome, routeTop } from "./routes";

import _debug from "debug";
import session from "express-session";

const debug = _debug("server:main");
dotenv.load();

const PORT: number = Number(process.env.PORT) || 3001;
const sessionMiddleware = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  },
});

passport.use(
  new Strategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "./auth/twitter/callback",
    },
    (token, tokenSecret, profile, cb) => {
      return cb(null, profile);
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

const app = express();

const main = async () => {
  const server = createServer(app);
  const options = {
    cookie: false,
    serveClient: false,
    pingTimeout: 15000,
    pingInterval: 13000,
  };

  app.set("views", "views/");
  app.set("view engine", "ejs");

  app.use(sessionMiddleware);

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static("public/"));
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());

  app.use(cors());
  app.use(express.static("public"));

  app.use("/auth", routeAuth);
  app.use("/home", routeHome);
  app.use("/", routeTop);

  const io = socketIO(server, options);
  io.use((socket, next) => {
    sessionMiddleware(socket.request, socket.request.res || {}, next);
  });
  server.listen(PORT, async () => {
    debug(`daifugo server listen on :${PORT}`);
    debug(`process.env.NODE_ENV=${String(process.env.NODE_ENV)}`);
  });
};

main().catch(e => {
  debug(`error:${e}`);
  process.exit(1);
});

export default app;

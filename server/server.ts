import { loadEnvConfig } from "@next/env";
loadEnvConfig("./", process.env.NODE_ENV !== "production");
import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare();
const expressApp = express();

setTimeout(() => {
  expressApp.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });
  console.log("Next Running");
}, 5000);

import wertik, { useGraphql, useModule, useDatabase } from "wertik-js/lib/next";
import { handleGithubAuth, handleGoogleAuth } from "./auth";
import { containerPreview } from "./preview";

const passport = require("passport");
const GitHubStrategy = require("passport-github2");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const useRedis = process.env.USE_REDIS === "yes" ? true : false;
expressApp.use(require("cookie-parser")());
expressApp.use(require("body-parser").urlencoded({ extended: true }));
expressApp.use(require("body-parser").json());

if (useRedis) {
  const redis = require("redis");
  let RedisStore = require("connect-redis")(session);
  let redisClient = redis.createClient();
  expressApp.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: "keyboard cat",
      saveUninitialized: false,
      resave: false,
    })
  );
} else {
  expressApp.use(
    session({
      secret: "keyboard cat",
      saveUninitialized: false,
      resave: false,
    })
  );
}

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

handleGoogleAuth(passport, GoogleStrategy);
handleGithubAuth(passport, GitHubStrategy);

expressApp.use(passport.initialize());
expressApp.use(passport.session());

wertik({
  port: process.env.port || 3000,
  graphql: useGraphql(),
  express: expressApp,
  database: {
    jscontainer: useDatabase({
      name: "jscontainer",
      password: "pass",
      username: "root",
      host: "localhost",
      port: 3306,
    }),
  },
  modules: {
    User: useModule({
      useDatabase: true,
      name: "User",
      database: "jscontainer",
      table: "users",
    }),
    Container: useModule({
      useDatabase: true,
      name: "Container",
      database: "jscontainer",
      table: "containers",
      on: function ({ useExpress }) {
        useExpress((express: any) => {
          express.get(
            "/auth/github",
            passport.authenticate("github", {
              scope: ["user:email"],
              session: true,
              passReqToCallback: true,
            })
          );

          express.get(
            "/auth/github/callback",
            passport.authenticate("github", {
              failureRedirect: "/login",
              session: true,
            }),
            function (req, res) {
              // Successful authentication, redirect home.
              res.redirect("/");
            }
          );

          express.get(
            "/auth/google",
            passport.authenticate("google", {
              scope: [
                "https://www.googleapis.com/auth/userinfo.profile",
                "https://www.googleapis.com/auth/userinfo.email",
              ],
            })
          );

          express.get(
            "/auth/google/callback",
            passport.authenticate("google", {
              failureRedirect: "/login",
              session: true,
            }),
            function (req, res) {
              res.redirect("/");
            }
          );
          containerPreview(express);
        });
      },
    }),
  },
});

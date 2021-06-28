const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const passport = require("passport");
const handle = app.getRequestHandler();
const GitHubStrategy = require("passport-github2");
const session = require("express-session");


app.prepare().then(async () => {
  const useRedis = process.env.USE_REDIS === "yes" ? true : false
  const server = express();

  server.use(require("cookie-parser")());
  server.use(require("body-parser").urlencoded({ extended: true }));

  if (useRedis) {
    const redis = require("redis");
    let RedisStore = require("connect-redis")(session);
    let redisClient = redis.createClient();
    server.use(
      session({
        store: new RedisStore({ client: redisClient }),
        secret: "keyboard cat",
        saveUninitialized: false,
        resave: false,
      })
    );
  } else {
    server.use(
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

  server.use(passport.initialize());
  server.use(passport.session());

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback",
        passReqToCallback: true,
      },
      function (req, accessToken, refreshToken, profile, done) {
        req.login(profile, () => {
          return done(null, profile);
        });
      }
    )
  );
  // await sequelize.authenticate();
  // sequelize.sync({force: true})
  // console.log("Connection to the database has been established successfully.");

  server.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["user:email"],
      session: true,
      passReqToCallback: true,
    })
  );

  server.get(
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

  server.get("/api/me", (req, res) => {
    res.json({
      user: req.user ? req.user : {},
      isAuthenticated: req.isAuthenticated(),
    });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Custom Ready on http://localhost:${port}`);
  });
});

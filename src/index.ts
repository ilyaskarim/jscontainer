require("dotenv").config();
import express from "express";
import exphbs from "express-handlebars";
import * as wertik from "wertik-js";
import session from "express-session";
import flash from "express-flash";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";

import configuration from "./wertik/wertik";
// import passport from "./auth/passport";

const app = express();

const allowedOrigins = [
  "localhost:3000",
  "localhost:3001",
  "localhost:8080",
  "localhost:5000",
  "wapgee.com",
];

app.use("/pb", express.static("public"));
app.use(
  session({
    maxAge: 24 * 60 * 60 * 1000,
    secret: "cookieParser",
    proxy: true,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/pb/user-profile", express.static("uploads/user-profile"));
app.use(
  "/user-management-app",
  express.static(path.join(__dirname, "../../apps/user-management/"))
);

app.set("view engine", "handlebars");
app.use(cookieParser("cookieParser"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  if (process.env.APP_ENV === "local" || process.env.APP_ENV !== "production") {
    next();
    return;
  }
  const Origin = req.header("Origin");
  const filter =
    Origin && allowedOrigins.filter((c) => Origin.indexOf(c) > -1).length;
  if (filter > 0 || Origin === undefined) {
    next();
  } else {
    res.json({ message: "wow" });
  }
});

app.engine(
  "handlebars",
  exphbs({
    layoutsDir: `${__dirname}/../views/layouts`,
    partialsDir: `${__dirname}/../views/partials`,
    helpers: {
    },
  })
);

// @ts-ignore
configuration.expressApp = app;

wertik.connectDatabase(configuration.database).then((databaseInstance) => {
  // @ts-ignore
  configuration.databaseInstance = databaseInstance;
  wertik.serve(configuration).then((wertikApp: any) => {});
});

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const wertik = __importStar(require("wertik-js"));
const express_session_1 = __importDefault(require("express-session"));
const express_flash_1 = __importDefault(require("express-flash"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const wertik_1 = __importDefault(require("./wertik/wertik"));
// import passport from "./auth/passport";
const app = express_1.default();
const allowedOrigins = [
    "localhost:3000",
    "localhost:3001",
    "localhost:8080",
    "localhost:5000",
    "wapgee.com",
];
app.use("/pb", express_1.default.static("public"));
app.use("/node_modules", express_1.default.static("node_modules"));
app.use(express_session_1.default({
    maxAge: 24 * 60 * 60 * 1000,
    secret: "cookieParser",
    proxy: true,
    resave: true,
    saveUninitialized: true,
}));
app.use("/pb/user-profile", express_1.default.static("uploads/user-profile"));
app.use("/user-management-app", express_1.default.static(path_1.default.join(__dirname, "../../apps/user-management/")));
app.set("view engine", "handlebars");
app.use(cookie_parser_1.default("cookieParser"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(express_flash_1.default());
app.use((req, res, next) => {
    if (process.env.APP_ENV === "local" || process.env.APP_ENV !== "production") {
        next();
        return;
    }
    const Origin = req.header("Origin");
    const filter = Origin && allowedOrigins.filter((c) => Origin.indexOf(c) > -1).length;
    if (filter > 0 || Origin === undefined) {
        next();
    }
    else {
        res.json({ message: "wow" });
    }
});
app.engine("handlebars", express_handlebars_1.default({
    layoutsDir: `${__dirname}/../views/layouts`,
    partialsDir: `${__dirname}/../views/partials`,
    helpers: {},
}));
// @ts-ignore
wertik_1.default.expressApp = app;
wertik.connectDatabase(wertik_1.default.database).then((databaseInstance) => {
    // @ts-ignore
    wertik_1.default.databaseInstance = databaseInstance;
    wertik.serve(wertik_1.default).then((wertikApp) => { });
});
//# sourceMappingURL=index.js.map
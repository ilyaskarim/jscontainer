"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./modules/main"));
exports.default = {
    name: "Wertik",
    builtinModules: "email,backup",
    database: {
        dbDialect: "mysql",
        dbUsername: process.env.DB_USERNAME,
        dbPassword: process.env.DB_PASSWORD,
        dbName: process.env.DB_DATABASE,
        dbHost: process.env.DB_HOST,
        dbPort: process.env.DB_PORT,
    },
    port: 8080,
    backup: {
        digitalOceanSpaces: {
            accessKeyId: "KMUIUKW5CPNNCOTQDWYH",
            secretAccessKey: "+WhCRyVHHB2jwR5CCniWjlpyroZ6zcZSxIi5NUvxTeI",
            spacesEndpoint: "fra1.digitaloceanspaces.com",
            uploadParams: {
                Bucket: "wapgee-storage",
                ACL: "private",
            },
        },
        dropbox: {
            accessToken: "",
        },
    },
    email: {
        disable: true,
        configuration: {
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        },
    },
    graphql: {
        disable: false,
        apolloGraphqlServerOptions: {
            cacheControl: {
                defaultMaxAge: 0,
            },
            tracing: true,
            subscriptions: {
                path: "/subscriptions",
            },
            playground: process.env.APP_ENV === "local" ||
                process.env.APP_ENV === "development",
        },
    },
    restApi: {
        disable: false,
        showWertik404Page: true,
        beforeStart: (obj) => { },
        restApi404Handler: (req, res) => {
            res.render("errors/404", {
                seo: {
                    title: "Page Not Found | Wapgee",
                    description: "We are sorry, we are not able to find your desire route",
                },
            });
        },
    },
    modules: [
        Object.assign({}, main_1.default)
    ],
    sockets: {
        disable: false,
        port: 2000,
    },
    security: {
        allowedIpAddresses: ["*"],
    },
    storage: {
        storageDirectory: "./uploads/",
    },
    cron: {
        cronList: [
            {
                expression: "* * * * *",
                function: (context) => {
                    // app context is available in context variable.
                },
                options: {},
                events: {
                    initialized(i) { },
                },
            },
        ],
    },
};
//# sourceMappingURL=wertik.js.map
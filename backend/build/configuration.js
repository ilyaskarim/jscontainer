"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./modules/organization/index"));
const index_2 = __importDefault(require("./modules/container/index"));
const index_3 = __importDefault(require("./modules/container_comment/index"));
exports.default = {
    name: "Wertik",
    builtinModules: "user,auth,forgetPassword",
    database: {
        dbDialect: "mysql",
        dbUsername: "root",
        dbPassword: "",
        dbName: "jscontainer",
        dbHost: "localhost",
        dbPort: "3306",
    },
    frontendAppUrl: "http://localhost:8080/",
    frontendAppActivationUrl: "http://localhost:8080/activate-account",
    frontendAppPasswordResetUrl: "http://localhost:8080/reset-password",
    context: {
        data: {
            myName: "My powerful app",
        },
        createContext: function (mode, context) {
            return __awaiter(this, void 0, void 0, function* () {
                return {
                    value: "Value 1",
                };
            });
        },
    },
    email: {
        disable: true,
    },
    graphql: {
        disable: false,
        port: 4000,
    },
    restApi: {
        disable: true,
        port: 7000,
    },
    forceStartGraphqlServer: true,
    forceStartRestApiServer: true,
    ports: {
        graphql: 4000,
        restApi: 7000,
    },
    modules: [index_1.default, index_2.default, index_3.default],
    seeds: {},
    sockets: {
        disable: true,
    },
    security: {
        allowedIpAddresses: ["*"],
    },
};
//# sourceMappingURL=configuration.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wertik_js_1 = __importDefault(require("wertik-js"));
const configuration_1 = __importDefault(require("./configuration"));
wertik_js_1.default({}, configuration_1.default).then((wertikApp) => {
    if (configuration_1.default.database.dbDialect.includes("sql")) {
        wertikApp.database.sync();
    }
});
//# sourceMappingURL=index.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "Main",
    useDatabase: false,
    graphql: {
        crud: {
            query: {
                generate: false,
                operations: "*",
            },
            mutation: {
                generate: false,
                operations: "*",
            },
        },
        schema: ``,
        mutation: {
            schema: ``,
            resolvers: {},
        },
        query: {
            schema: ``,
            resolvers: {},
        },
    },
    restApi: {
        endpoints: [
            {
                path: "/",
                handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                    res.render("containers/container");
                }),
            },
            {
                path: "/preview/:id",
                handler: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
                    res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                This is a preview from previewer
            </body>
            </html>
          `);
                }),
            },
        ],
    },
};
//# sourceMappingURL=main.js.map
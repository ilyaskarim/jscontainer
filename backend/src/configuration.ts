import Organization from "./modules/organization/index";
import Container from "./modules/container/index";
import ContainerComment from "./modules/container_comment/index";
export default {
  name: "Wertik",
  builtinModules: "user,auth,forgetPassword",
  database: {
    dbDialect: "mysql",
    dbUsername: "root",
    dbPassword: "pass",
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
    createContext: async function (mode, context) {
      return {
        value: "Value 1",
      };
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
  modules: [Organization, Container, ContainerComment],
  seeds: {},
  sockets: {
    disable: true,
  },
  security: {
    allowedIpAddresses: ["*"],
  },
};

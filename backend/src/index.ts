import wertik from "wertik-js"
import configuration from "./configuration"


wertik({}, configuration).then((wertikApp: any) => {
  if (configuration.database.dbDialect.includes("sql")) {
    wertikApp.database.sync();
  }
});
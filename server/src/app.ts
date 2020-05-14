import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import { join as pathJoin } from "path";
import moment from "moment";

import config from "./config";
import { synchronizeDatabase } from "./models";
import apiRouter from "./api";

// Set moment locale
moment.locale("es-AR");

export const server = {
  config,
  defaultViewProperties: {
    title: config.title,
    basepath: config.basepath,
  },
  initializeDatabase: async () => {
    await synchronizeDatabase();
  },
  start: async function(): Promise<void> {
    const app = express();
    const port = this.config.port;

    app.set("views", pathJoin(__dirname, "../../web/views"));
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(session({
      name: "francofrizzoblanksessionid",
      secret: "GkhQnNxDQCHbvr/f4Jr6FRNYBeE=",
      resave: false,
      saveUninitialized: false,
    }));

    app.use("/", express.static(pathJoin(__dirname, "../../web/static")));
    app.use("/bundle", express.static(pathJoin(__dirname, "../web")));

    app.use("/api", apiRouter);

    app.get("/", (req, res) => res.render("main.ejs", { ...this.defaultViewProperties }));

    app.listen(port, () => console.log(`Listening on port ${port}`));
  },
}

server.initializeDatabase();
server.start();

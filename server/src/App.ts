import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import { join as pathJoin } from "path";
import moment from "moment";

import config from "./Config";

// Set moment locale
moment.locale("es-AR");

const defaultProperties = {
  title: config.title,
  basepath: config.basepath,
};

export const server = {
  start: async function(): Promise<void> {
    const app = express();
    const port = config.port;

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

    app.get("/", (req, res) => res.render("main.ejs", { ...defaultProperties }));

     app.listen(port, () => console.log(`Listening on port ${port}`));
  },
}

server.start()


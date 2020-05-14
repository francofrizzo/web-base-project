import { readFileSync } from "fs";
import { join as pathJoin } from "path";

export interface AppConfiguration {
  port: number;
  basepath: string;
  title: string;
}

let userConfig = {};
try {
  userConfig = JSON.parse(
    readFileSync(pathJoin(__dirname, "../../local/config.json")).toString()
  );
} catch (err) {
  console.log("No custom configuration file provided. Defaults will be used.");
}

const defaultConfig: AppConfiguration = {
  port: 2511,
  basepath: "http://localhost:2511",
  title: "Sitio sin título",
};

const config = Object.assign({}, defaultConfig, userConfig);

export default config;

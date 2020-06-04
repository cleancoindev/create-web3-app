import clone from "../../../clone";
import initializer from "../../../initializer";

import * as yargs from "yargs";

export default () => {
  console.log(process.version);

  yargs
    .scriptName("create-web3-app")
    .usage("$0 <cmd> [args]")
    .command(
      "clone",
      "Start a local cloned mainnet blockchain instance",
      (yargs) => {
        yargs.positional("name", {
          type: "string",
          default: "Cambi",
          describe: "the name to say hello to",
        });
      },
      function (argv) {
        console.log("Starting clone...");
        clone();
      }
    )
    .command(
      "initialize",
      "Start a DApp from using a template architecture",
      (yargs) => {
        yargs.positional("test", {
          type: "string",
          default: "Cambi",
          describe: "the name to say hello to",
        });
      },
      function (argv) {
        console.log("Creating project from template...");
        initializer();
      }
    )
    .help().argv;
};

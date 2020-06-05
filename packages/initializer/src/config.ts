import fse from "fs-extra";

function setDefaults(config: any = {}): any {
  const hooks = config.hooks || {};

  return {
    ignore: config.ignore || [],
    commands: config.commands || {
      compile: "truffle compile",
      migrate: "truffle migrate",
      test: "truffle test",
    },
    hooks: {
      "post-unpack": hooks["post-unpack"] || "",
    },
  };
}

function read(path: string): Promise<any> {
  return fse
    .readFile(path)
    .catch(() => "{}")
    .then(JSON.parse)
    .then(setDefaults);
}

export = {
  read,
  setDefaults,
};

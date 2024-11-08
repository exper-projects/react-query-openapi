const { defineConfig } = require("orval");

module.exports = defineConfig({
  "react-query-openapi": {
    hooks: {
      afterAllFilesWrite: "yarn format",
    },
    input: "../server/openapi.json",
    output: {
      client: "react-query",
      target: "./src/apis/index.ts",
      override: {
        mutator: {
          path: "./src/apis/custom-client.ts",
          name: "customClient",
        },
      },
    },
  },
});

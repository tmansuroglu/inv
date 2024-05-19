import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://www.omdbapi.com/swagger.json",
  apiFile: "./src/redux/services/baseApi.ts",
  apiImport: "baseApi",
  outputFile: "./src/redux/services/generatedApi.ts",
  exportName: "api",
  tag: true,
};

export default config;

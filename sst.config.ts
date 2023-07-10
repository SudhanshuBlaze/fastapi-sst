import { SSTConfig } from "sst";
import { Api } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "fastapi-sst",
      region: "eu-central-1",
    };
  },
  stacks(app) {
    app.setDefaultFunctionProps({
      runtime: "python3.10",
      memorySize: 128,
    });
    app.stack(function Stack({ stack }) {
      const api = new Api(stack, "api", {
        routes: {
          // "GET /": "functions/lambda.handler",
          $default: "functions/lambda.handler",
        },
      });
      stack.addOutputs({
        ApiEndpoint: api.url,
      });
    });
  },
} satisfies SSTConfig;

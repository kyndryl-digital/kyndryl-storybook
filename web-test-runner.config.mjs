import { legacyPlugin } from "@web/dev-server-legacy";
import { esbuildPlugin } from "@web/dev-server-esbuild";
//import { snowpack } from "@snowpack/web-test-runner-plugin";
process.env.NODE_ENV = "test";

export default {
  /* ... */
  coverageConfig: {
    exclude: ["**/*/_snowpack/**/*"],
  },
  plugins: [
    // make sure this plugin is always last
    legacyPlugin({
      polyfills: {
        webcomponents: true,
        // Inject lit's polyfill-support module into test files, which is required
        // for interfacing with the webcomponents polyfills
        custom: [
          {
            name: "lit-polyfill-support",
            path: "node_modules/lit/polyfill-support.js",
            test: "!('attachShadow' in Element.prototype)",
            module: false,
          },
        ],
      },
    }),
    // snowpack(),
    esbuildPlugin({ ts: true, target: "auto" }),
  ],
};

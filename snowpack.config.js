/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    output: "/",
    src: "/static",
  },
  plugins: [
    ["@snowpack/plugin-run-script", { cmd: "eleventy", watch: "$1 --watch" }],
  ],
  devOptions: {
    hmrDelay: 300, // give 11ty some time to finish
    open: "none",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
    sourcemap: "external",
  },
}

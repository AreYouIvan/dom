/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  buildOptions: {
    baseUrl: "https://areyouivan.github.io/dom/",
  },
};

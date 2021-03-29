module.exports = {
  async rewrites() {
    return [
      {
        source: "/uploads/:slug*",
        destination: "http://strapi.local:1337/uploads/:slug*",
      },
    ];
  },
};

const rupture = require("rupture");
module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        use: [rupture()],
      }
    }
  }
};

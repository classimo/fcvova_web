/**
 * Entry Script
 */

if (process.env.NODE_ENV === 'production') {
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  process.env.PORT = 80;
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js');
  process.env.MONGO_URL = "mongodb://paulius:ALUSalus666@ds029655.mlab.com:29655/heroku_zcbm1p3w";
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.config.babel.js",
          "verbose": false
        }
      ]
    ]
  });
  require('babel-polyfill');

  require('./server/server');
}

const config = {
  mongoURL: process.env.MONGODB_URI || 'mongodb://paulius:ALUSalus666@ds029655.mlab.com:29655/heroku_zcbm1p3w',
  port: process.env.PORT || 3000,
};

export default config;

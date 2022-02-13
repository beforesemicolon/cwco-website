const env = process.env.NODE_ENV || 'development';
const pages = require('./pages/data/pages.json');
const en = require('./pages/data/i18n/en.json');
const menu = require('./pages/data/menu');
const socialMedia = require('./pages/data/social-media');

module.exports = {
  env,
  staticData: {
    version: "1.2.0",
    pages,
    menu,
    socialMedia,
    translations: {
      en
    }
  }
};

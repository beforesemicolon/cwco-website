const env = process.env.NODE_ENV || 'development';
const pages = require('./pages/data/pages');
const en = require('./pages/data/i18n/en.json');
const menu = require('./pages/data/menu');
const socialMedia = require('./pages/data/social-media');
const {CodeSnippet} = require('./pages/tags/code-snippet');

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
  },
  customTags: [
    CodeSnippet
  ]
};

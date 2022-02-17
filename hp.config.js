const env = process.env.NODE_ENV || 'development';
const pages = require('./pages/data/pages');
const en = require('./pages/data/i18n/en.json');
const menu = require('./pages/data/menu');
const socialMedia = require('./pages/data/social-media');
const faq = require('./pages/data/faq');
const {CodeSnippet} = require('./pages/tags/code-snippet');

module.exports = {
  env,
  staticData: {
    domain: env === 'development' ? 'http://localhost:3000' : 'https://cwco.io',
    version: "1.2.0",
    pages,
    menu,
    socialMedia,
    faq,
    translations: {
      en
    }
  },
  customTags: [
    CodeSnippet
  ]
};

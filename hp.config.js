const env = process.env.NODE_ENV || 'development';
const pages = require('./src/data/pages');
const en = require('./src/data/i18n/en.json');
const menu = require('./src/data/menu');
const socialMedia = require('./src/data/social-media');
const faq = require('./src/data/faq');
const {CodeSnippet} = require('./src/tags/code-snippet');

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

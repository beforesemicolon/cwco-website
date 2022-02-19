const {build} = require('@beforesemicolon/html-plus');
const path = require('path');
const menu = require('./src/data/menu');
const {collectPaths} = require("./utils/collect-paths");

const paths = collectPaths(menu.documentation);

build({
  srcDir: path.resolve(__dirname, './src'),
  destDir: path.resolve(__dirname, './public'),
  contextDataProvider: (page) => {
    return {
      path: page.path,
      locale: 'en'
    }
  },
  templates: [
    {
      path: path.resolve(__dirname, './src/documentation.html'),
      dataList: Array.from(paths, path => ([path, {path, locale: 'en'}]))
    }
  ]
})
  .catch(e => {
    console.log('build failed', e);
  })

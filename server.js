const express = require('express');
const http = require('http');
const path = require('path');
const {engine} = require('@beforesemicolon/html-plus');

const app = express();

(async () => {
  await engine(app, path.resolve(__dirname, './pages'), {
    onPageRequest(req) {
      const locale = req.acceptsLanguages("en");
      const path = req.path.length > 1 ? req.path.replace(/(\/|\/index\.html)$/, '') : req.path;
      return {
        path,
        locale,
        params: req.params
      }
    }
  });
  
  const server = http.createServer(app);
  
  server.listen(3000);
})()

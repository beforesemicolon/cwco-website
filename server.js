const express = require('express');
const http = require('http');
const path = require('path');
const {engine} = require('@beforesemicolon/html-plus');

const app = express();

const getRequestData = req => {
  const locale = req.acceptsLanguages("en");
  const path = req.path.length > 1 ? req.path.replace(/(\/|\/index\.html)$/, '') : req.path;
  return {
    path,
    locale,
    params: req.params
  }
}

(async () => {
  app.get('/documentation/:doc?', (req, res, next) => {
    const ext = path.extname(req.path);
    
    if (!ext || ext === '.html') {
      return res.render('documentation', getRequestData(req));
    }
    
    next();
  })
  
  await engine(app, path.resolve(__dirname, './pages'), {
    onPageRequest(req) {
      return getRequestData(req)
    }
  });
  
  const server = http.createServer(app);
  
  server.listen(3000);
})()

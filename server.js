const express = require('express');
const http = require('http');
const path = require('path');
const {engine} = require('@beforesemicolon/html-plus');

const app = express();

(async () => {
  await engine(app, path.resolve(__dirname, './pages'));
  
  const server = http.createServer(app);
  
  server.listen(3000);
})()

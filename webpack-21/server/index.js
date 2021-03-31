// hack
if (typeof window === 'undefined') {
  global.window = {};
}

const express = require('express');
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server.js');
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8');

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));

  app.get('/search', (req, res) => {
    const html = renderMarKup(renderToString(SSR));

    res.status(200).send(html);
  });

  app.listen(port, () => {
    console.log('server is runing ok');
  });
};

server(process.env.PORT || 3000);

// 模板
const renderMarKup = (str) => {
  return template.replace('<!--HTML_DOEM-->', str);
};

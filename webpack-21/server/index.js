// hack
if (typeof window === 'undefined') {
  global.window = {};
}

const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server.js');

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
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ssr</title>
    </head>
    <body>
     <div id="root"> ${str}</div>
    </body>
    </html>
  `;
};

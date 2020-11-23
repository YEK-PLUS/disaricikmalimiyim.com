const { Appsignal } = require('@appsignal/nodejs');

const appsignal = new Appsignal({
  active: true,
  name: 'disaricikmalimiyim.com',
  apiKey: '16639c89-bba4-405f-886a-c991261df136',
});

const {
  getRequestHandler,
  EXPERIMENTAL: { getWebVitalsHandler },
} = require('@appsignal/nextjs');

const url = require('url');
const next = require('next');
const { createServer } = require('http');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = getRequestHandler(appsignal, app);
const vitals = getWebVitalsHandler(appsignal);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/__appsignal-web-vitals') {
      vitals(req, res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`); // eslint-disable-line no-console
  });
});

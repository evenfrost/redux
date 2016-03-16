import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('method', req.method);
  console.log('url', req.url);

  res.write('Hello, world');
  res.end();
});

server.listen(5000);

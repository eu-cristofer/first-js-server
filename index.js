console.log('Welcome to first-js-server.')

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{
  console.log('[%s] request, url: %s', req.method, req.url);
  if (req.method == 'POST') {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      console.log('  Data: %s',body)
    });
  }
  if (req.url == '/json') {
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write(
      JSON.stringify(
        {'TAG': 'B-007' , 'Rated flow': '50'}
      ));
  } else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1>');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('Listening on port %d',PORT);
});

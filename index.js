console.log('Welcome to first-js-server.')

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{
  console.log(req.url);
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
  console.log('Listening on port ${PORT}');
});

console.log('Welcome to firstJSproject.')

const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) =>{
  console.log(req.url);

  if (req.url == '/json') {
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write(
      JSON.stringify(
        { number: 1 , name: 'John'}
      )
    );
  } else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('Hello World!');
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('Listening on port ${PORT}');
});

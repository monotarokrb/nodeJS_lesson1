const http = require ('http');

const server = http.createServer((req, res) => {
    console.log('run request...')
    res.setHeader('Content-type','text/html');
    res.write('<h3>Hello World!</h3>');
    res.write('<h2>From Sarah with love</h2>');
    res.write('<h2>save in new branch</h2>');
    res.end();
    
})

server.listen(3000,'localhost',() => {
    console.log('node.js server is running on port: 300');
})

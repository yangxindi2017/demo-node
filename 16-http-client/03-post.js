#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/',
      url = require('url');

var option =url.parse(addr);
option.method='POST';


var req= http.request(addr,function(res){
  //print start line
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

  //print response header
  console.log(res.headers);
  console.log('');

  //pront response body
  res.pipe(process.stdout);
});

req.end('Hello server');

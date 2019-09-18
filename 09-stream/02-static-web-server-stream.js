#!/usr/bin/node
const http = require('http'),
      fs = require('fs');

http.createServer((req,res)=>{
  //console.log(req.url);
  if(req.url === '/favicon.ico') return;
  var fileName = __dirname + req.url;
  console.log(fileName);
  fs.createReadStream(fileName).pipe(res);
}).listen(8080);

console.log(process.pid);

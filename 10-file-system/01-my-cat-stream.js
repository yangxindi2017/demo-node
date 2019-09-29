#!/usr/bin/node

const fs =require('fs');
const file = process.argv[2] || __filename;

var source =fs.createReadStream(file);
source.pipe(process.stdout);
source.on('error',function(err){
  console.error(err.message);
});
//这样子无法捕获异常事件
//fs.createReadStream(file).pipe(process.stdout);

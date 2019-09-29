#!/usr/bin/node

const cp =require('child_process');

console.log('I am father with id:',process.pid);
var child=cp.fork(['./02-child.js']);

//var child = cp.spawn('cat','./04-fork.js');
//child.stdout.pipe(process.stdout);
//child.strerr.pipe(process.stderr);

console.log('I am father with id %d:',process.pid);

global.setTimeout(function(){
  child.send ('hello I am your father');

  //1.
  //console.log('father bye!');
  //process.exit();
},2000);

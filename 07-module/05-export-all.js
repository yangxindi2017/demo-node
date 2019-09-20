#!/usr/bin/node

module.export ={
  pi:require('./02-export-var'),
  circle:e=require('./02-export-function'),
  Circle:require('./02-export-object')
  
};

console.dir(module);

#!/usr/bin/node

module.export ={
  pi:require('./02-export-var'),
  circle:require('./02-export-function'),
  Circle:require('./02-export-object')
  
};

console.dir(module);

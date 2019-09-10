#!/usr/bin/node
/*
const p= require('./02-export-var');

console.dir(module);
console.log(p);

const circle =require('./02-export-function');

console.log('r=10,circle area:%d,circle(10).area');

*/

const circle =require('./02-export-function'),
      log = console.log;

log('r=10,circle diameter:',circle.area(10));
log('r=8,circle area:',circle.area(10));
console.log(module);


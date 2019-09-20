#!/usr/bin/node

const obj =require('./05-export-all');

console.log(obj.pi);
console.log(obj.circle(10).area());

var c =new obj.circle(20);
console.log(c.diameter());


#!/usr/bin/node
function longTask(){
  var num =0;
  for(var i=0;i<10000;i++){
    for(var j=0;j<10000;j++){
      num +=i*j;
    } 
  } 
  return num;
}

console.time('Time');
var n=longTask();
console.timeEnd('Time');
console.log('n = %d',n);

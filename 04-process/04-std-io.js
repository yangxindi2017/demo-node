#!/usr/bin/node
var msg =['Name','Email','QQ','Mobile'];
var me ={},i=1;
console.log(msg[0]+':');

process.stdin.on('data',function(data){
  me[msg[i-1]]=data.slice(0,data.length-1).toString('utf8');
  if(i===4){
    console.log(me);
    process.exit();
  }else{
    process.stdout.write(msg[i++]+':');
  }
});

process.stdin.on('end',function(){
  console.log(me);
})

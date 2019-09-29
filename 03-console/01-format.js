#!/usr/bin/node

const user = {
  name:'yangxindi',
  age:21,
  qq:'694076236'
};

const log = console.log;

log('name: %s',user.name);
log('age: %d',user.age);
log('user:%j',user.qq);

log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);

console.error('Error!something wrong!');




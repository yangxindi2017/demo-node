#!/usr/bin/node
console.log('dir name:',__dirname);
console.log('file name:',__filename);

//方案一，没有考虑跨平台
var file = __dirname + '/view/base.html/';


//方案二，代码复杂，平台考虑不全面

switch(process.platform){
  case 'linux':
    file = __dirname + '/view/base.html';
    break;
  case 'win32':
    file = __dirname + '\\view\\base.html';
    break;
  default:
    file = 'error';
    break;
}

//方案三：最好
//const path = require('path');
//file = path.join(__dirname,'data','db.xml');
//console.log(file);

//window data file
//file = __dirname + '\\data\\db.xml';
//console.log('file name in window:',file);
//operate data file/
//var file = __dirname + '/data/db.xml';
//console.log('file name:',file);





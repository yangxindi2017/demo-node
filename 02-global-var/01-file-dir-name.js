#!/usr/bin/node
console.log('dir name:',__dirname);
console.log('file name:',__filename);

//operate data file/
//var file = __dirname + '/data/db.xml';
//console.log('file name:',file);

//window data file
//file = __dirname + '\\data\\db.xml';
//console.log('file name in window:',file);

//const path = require('path');
//file = path.join(__dirname,'data','db.xml');
//console.log(file);

//
//var file = __dirname + '/view/base.html/';

var file;
switch(process,platform){
  case "linux":
    file = __dirname + "/view/base.html";
    break;
  case "win32":
    file = __diename + "\\view\\base.html";
    break;
    default;
      file = "error";
}

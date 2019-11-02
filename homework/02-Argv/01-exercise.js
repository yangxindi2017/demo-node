#!/usr/bin/node

const log = console.log,
      arg = process.argv[2],
      fs= require('fs'),
      dir = __dirname,
      files = fs.readdirSync(dir),
      err = console.error;

switch(arg){
  case 'list':
    log('[');
    for(var i=0;i<files.length;i++){
      log('  {"fileName":'+'"'+files[i]+'",'+'"fileSize"：'+'"'+fs.statSync(files[i]).size +'"},');

      if(i == files.length-1){
        log('  {"fileName":'+'"'+files[i]+'",'+'"fileSize"：'+'"'+fs.statSync(files[i]).size +'"}');
        log(']');
      }
    }
    break;

  case 'mkdir':
    fs.mkdirSync('folder');
    break;
 
  default:
    err('Error:命令行参数错误！');
    break;
    
}
process.exit(1);



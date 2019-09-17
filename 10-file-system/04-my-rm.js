#!/usr/bin/node

const fs = require('fs'), 
      file = process.argv[2];

fs.unlink(file);
//不可以删除目录只能删除文件


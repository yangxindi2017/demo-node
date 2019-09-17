#!/usr/bin/node

//08 移动文件 

const fs = require('fs'),
      src = process.argv[2],
      dst =process.argv[3];
fs.renameSync(src,dst);

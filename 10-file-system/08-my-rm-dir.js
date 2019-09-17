#!/usr/bin/node

const dir= process.argv[2] || __dirname,
      fs = require('fs');

fs.rmdirSync(dir);

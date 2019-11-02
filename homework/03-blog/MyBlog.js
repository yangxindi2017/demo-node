#!/usr/bin/node
const http = require('http'),
      fs   = require('fs'),
      qs   = require('querystring'),
      url = require('url'),
      log  = console.log;


var name = '',
    name1 = '',
    data ='',
    chapterList = JSON.parse(fs.readFileSync('./js/chapterList.js','utf8')),
    userList = [
      {username: 'admin', pwd: 'admin'}
    ];


http.createServer(function(req, res) {
  //log('request URL',req.url);
  //log('req.method',req.method);

  //没有的文件忽略
  if(req.url ==='/favicon.ico') return;
 

  //GRT方法请求页面
  if(req.method === 'GET'){
    show(res,req.url,url);
  }

  //登录验证成功后才可以看到后台页面
  if(req.url.indexOf('/login')!=-1 && req.method==='POST'){
    var user ='';
    req.on('data',(data)=>{return user+=data;});
    req.on('end',()=>{
      var usr =qs.parse(user);
      log('usr',usr);
      if(usr.username === userList[0].username && usr.password ===userList[0].pwd){
        show(res,'/addChapter/',url);
      }else{
        show(res,'/login/',url);
      }
    });
  }
 
  //添加文章
  if(req.url==='/add' && req.method ==='POST'){
    var item ='';
    req.on('data',(data)=>{return item +=data;});
    req.on('end',()=>{
      item = qs.parse(item.toString('utf8'));
      var text= {};
      text.chapterName = item.title;
      text.chapterContent = item.content;
      text.chapterId = chapterList.length+1;
      chapterList.push(text);
      fs.writeFileSync('./js/chapterList.js',JSON.stringify(chapterList));
      res.end('OK');
    });
  }

}).listen(8080);
        
    

function show(res,ReqUrl,url){
  var realpath = __dirname,
      reso = url.parse(ReqUrl).pathname.split('.'),
      reso1=url.parse(ReqUrl).pathname.split('/'),
      name = reso1[1],
      name1 = reso1[reso1.length-1],
      name2 = reso1[2],
      id =qs.parse(url.parse(ReqUrl).query),
      type ='.'+ reso[reso.length-1];

  //忽略掉没有的文件
  if(name1==='bg.jpg') return;

  switch(name){
    case 'listmanager':
      name = 'list';
      break;
    case 'list':
      name ='chapterList';
      break;
    default:
      break;
  }

  //阅读全文

  
  //如果为.html页面执行以下
  if((ReqUrl).indexOf('.')==-1){
    var html = fs.readFileSync('./'+name+'.html').toString('utf8');
    res.writeHead(200,{
      'Content-Type':'text/html;charset=UTF8'
    });
    res.end(html);
  
    /*
    if(id!=null){
      console.log('id',qs.parse(id));
     // name= 'chapter';
      
      //向服务器传送数据
      var data = JSON.stringify(chapterList[id.chapterId-1]);//获得数组项数
      res.setHeader('Content-Length',Buffer.byteLength(data));
      res.setHeader('Content-type','text/plain;charset="utf8"');
      res.setHeader('Access-Control-Allow_origin','*');
      res.end(data);
    }

    if(ReqUrl=='/list'){
      log('id',qs.parse(id));
      var data1 = JSON.stringify(chapterList);
      res.setHeader('Content-Length',Buffer.byteLength(data1));
      res.setHeader('Content-Type','text/plain;charset="utf-8"');
      res.setHeader('Access-Control-Allow-Origin','*');
      res.end(data1);
      return;
      
    }
    */


  }else{
    if(type=='.jpg' || type == '.png' || type=='.jpeg'){
      res.writeHead(200,{'Content-Type':'text/'+type});
      res.end(fs.readFileSync(realpath+ '/images/'+ name1));
    }else if(type == '.css'){
      res.writeHead(200,{'Content-Type':'text/'+ type});
      res.end(fs.readFileSync(realpath + '/css/'+ name1));
    }else{
      res.writeHead(200,{'Content-Type':'text/'+ type});
      res.end(fs.readFileSync(realpath + '/js/'+ name1));
    }
  }
}

function err(res) {
  var msg = 'Not found';
  res.writeHead(404, {
    'Content-Length': msg.length,
    'Content-Type': 'text/plain'
  });
  res.end(msg);
}

#!/usr/bin/node
const http =require('https'),
      cheerio=require('cheerio'),
      print = require('util').debuglog('crawler'),
      log =console.log,
      addr ='https://segmentfault.com/lives/free';

http.get(addr,function(res){
  var result ='';

  res.on('data',function(data){
    result +=data;
  });
  res.on('end',function(){
    print(result);

    //
    
    var $ = cheerio.load(result);
    $('body').find('.card-body').each(function(){
      print($(this).html);

      var cName =$(this).find('.card-title>a').text(),
          cURL = $(this).find('.card-title>a').attr('href');

      cURL ='https://segmentfault.com/lives/free'+cURL;
      if(cName ==='') return;
              

      log('课程名称',cName);
      log('课程地址',cURL);
      log('');

    });
  });
        
});
      


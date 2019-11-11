var express = require('express');
var data = require('../public/javascripts/data.json');
var router = express.Router();
var permission =false;
var dataError = {
  msg:'用户名或密码错误'
};

/* GET home page. */
router.get('/', function(req, res) {
  
  res.render('login', { title: 'Express' });
});
router.post('/',function(req,res){
  var username = data.users[0].username;
  var pwd =data.users[0].password;
  permission = true;
  if(req.body.username===username && req.body.pwd === pwd){
    res.redirect('/list');
  }else{
    var msg = '用户名或密码错误！';
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end(msg);
  }
});
router.get('/list',function(req,res){
  if(permission == true){
    res.render('list',{
      chapterList:data.chapterList,
      length:data.chapterList.length
    });
    permission=false;
  }else{
    var msg = '请先登录';
    res.setHeader('Content-Type','text/plain;charset=utf8');
    res.end(msg);
  }

});


module.exports = router;


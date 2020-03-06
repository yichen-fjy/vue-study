var express = require('express');//node的一个框架
var bodyParser = require('body-parser');//express的插件，数据整理
var http = require('http');//http对象，node内置对象
var path = require('path');//路径对象，node内置对象

var app = express();

//建立静态资源访问
app.use(express.static(path.join(__dirname,'src')));

app.use(bodyParser());//使用此插件

app.get('/get/contact',function(require,response){
  //console.log(typeof require.query,require.query);
  response.json({
    address: '杭州下载区杭州下载区杭州下载区xxxx3-2-901',
    officeTel: '0571-8890Xxxxx',
    contactTel: '1360000000000',
    postcode: '310000',
    email: 'xxxxxxks@163.com',
  });
});

app.get('/get/productlist',function(require,response){
  //console.log(typeof require.query,require.query);
  response.json({
    name: 'BK系列控制变压器',
    introduce: '适用范围：BK系列控制变压器适用于50Hz-60Hz的交流电路中，  通常用作机床控制电器局部照明灯及指示灯的电源中。',
  });
});

app.get('/get/newslist',function(require,response){
  //console.log(typeof require.query,require.query);
  response.json({
  	time: '2013-3-08',
    content: '江西大于xxxxx深加工产业基地江西大于xxxxx深加工产业基地江西大于xxxxx深加工产业基地',
  });
});

app.get('/get/index',function(require,response){
  //console.log(typeof require.query,require.query);
  response.json({
    content: '大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月，大余县xxxxxx公司城里于2002年9月...',
    product: '产品电器F0000001号',
    news: '的说法撒旦发射撒旦撒旦飒沓',
  });
});

http.createServer(app).listen(8088,function(){
  console.log('8088启动成功');
});

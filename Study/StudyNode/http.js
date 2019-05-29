var http = require('http')
var server = http.createServer() //创建一个web服务器
//监听request请求事件处理函数，设置请求处理函数，需要接受两个参数
    //request 请求对象，获取客户端的请求信息，比如地址
    //response 响应对象，给客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到客户请求了,地址为' + request.url) //我们可以在客户端浏览器地址里改

    // response.write('helloooo')
    // response.write('worldddd') //write可以有多个
    // response.end() //一定用end来结束响应，否则客户端会一直等待
    // response.end('helloworld') //以上可以直接这样写

    //根据不同的请求路径发送不同的响应结果
    //1.获取请求路径   
        //req.url获取到的是端口号之后的那一部分路径，也就是所有的url都是以/开头的
    //2.判断路径处理响应
    var url = request.url
    if(url === '/'){
        response.end('index page')
    }else if(url === '/login'){
        response.end('login page')
    }else {
        response.end('not find 404')
    }

})

//绑定端口号启动服务
server.listen(3000,function(){
    console.log('绑定完端口号了，可以通过http://127.0.0.1:3000/来访问')
})
var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
    //utf8 浏览器对中文 gbk
    // res.setHeader('Content-Type','text/plain;charset=utf-8') // 在http协议中，Content-Type就是告知发送的类型
    //plain普通
    // res.end('hello 你好啊！') //没有上面的响应的中文是乱码

    var url = req.url // 端口号之后的
    if(url === '/plain'){
        res.setHeader('Content-Type','text/plain;charset=utf-8') // 在http协议中，Content-Type就是告知发送的类型
        res.end('hello 你好啊！') //没有上面的响应的中文是乱码
    }else if(url === '/html'){
        res.setHeader('Content-Type','text/html;charset=utf-8') // 在http协议中，Content-Type就是告知发送的类型
        res.end('<h1>同志们好~</h1>')
    }
    // res.setHeader('Content-Type','image/jpeg;charset=utf-8')
})

server.listen(3000,function(){
    console.log('Server is running...')
})
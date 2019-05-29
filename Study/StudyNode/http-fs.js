var http = require('http')

var server = http.createServer()

var fs = require('fs')
server.on('request',function(req,res){
    var url = req.url
    fs.readFile('./resource/hello.html',function(err,data){
        if(err){
            console.log('出现错误')
        }else if(url==='/page'){
            res.setHeader('Content-Type','text/html;charset=utf-8') // 在http协议中，Content-Type就是告知发送的类型        
            res.end(data)
        }else if(url==='/txt'){
            
        }
    })
    
})
server.listen(3000,function(){
    console.log('server is running')
})
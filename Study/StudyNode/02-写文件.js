var fs = require('fs')
fs.writeFile('./你好.txt','这里是要写得内容',function(error){
    console.log('文件写入成功')
})
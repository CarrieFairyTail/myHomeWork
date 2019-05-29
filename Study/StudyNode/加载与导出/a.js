// require作用
// 1.加载文件模块并执行里边的代码
// 2.拿到被加载模块导出的接口对象
var bExport = require('./b')
console.log(bExport.b)
// console.log(bExport,)
console.log(bExport.add(10,30))
bExport.readFile('./a.js')

var fs = require('fs')
fs.readFile('./a.js',function(err,data){
    if(err){
        console.log('出错了')
    }else{
        console.log(data.toString())
    }
})
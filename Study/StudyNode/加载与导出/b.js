var b = 'foo'
exports.b = 'hello' // export用来导出
exports.add = function(x,y){
    return x + y
}
function add(x,y){
    return x - y
}

exports.readFile = function(path,callback){
    console.log('文件路径' + path)
}
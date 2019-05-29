const fs = require('fs')
const path = require('path')

// fs.readFile('./file/01.txt',function(error,data){
//     if(error){
//         console.log('文件读取失败')
//     }else{
//         console.log(data.toString())
//     }
// })

function getFileByPath(fpath,succdata,errdata){
    fs.readFile(fpath, 'utf-8', (error,data) => {
        if(error) return errdata(error)
        succdata(null,data)
    })
}

getFileByPath(path.join(__dirname,'./file/01.txt'),function(data){
    console.log(data + '成功~')
},function(err){
    console.log(err.message + '失败~')
})
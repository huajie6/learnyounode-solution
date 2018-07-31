// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// var lineList = buffer.toString().split('\n');
// console.log(lineList.length-1);

// var fs = require('fs');
// fs.readFile(process.argv[2],function(err,data){
//     if(err){
//         console.log(err);
//         return 
//     }
//     console.log( data.toString().split('\n').length-1);
// })

var fs = require('fs');
fs.readdir(process.argv[2],function(err,dirList){
    if(err){
        console.log(err);
        return
    }
    dirList.filter(function(dir){
        if (dir.indexOf('.'+process.argv[3])>=0){
            console.log(dir);
        }
    })
})

const path = require("path");
const fs = require('fs');
const sqlite3 = require("../asars/sqlite3.asar");

let dbName = engine.getApplication().getCurrentApp().getName()||"default";

let db = new sqlite3.cached.Database(path.join(__dirname, dbName+".db"));

let ensureDirs = function (rootPath,dir) {
    let dirs = dir.split('/');
    let p = rootPath;
    for(let i=0;i<dirs.length;i++){
        p += ("/"+dirs[i]);
        if(!fs.existsSync(p)){
            fs.mkdirSync(p);
        }
    }

}

db.saveFile = function (filePath,fileName,data) {
    return new Promise((resolve,reject)=>{
        var dir = path.join(__dirname,filePath);
        var createFile = function () {
            var url = dir+"/"+fileName;
            fs.writeFile(url,data,'base64',function (err) {
                if (!err) {
                    resolve(url)
                }else{
                    reject(err)
                }
            })
        }
        ensureDirs(__dirname,filePath);
        createFile();
    });

}

function deleteFolder(p) {
    var files = [];
    if( fs.existsSync(p) ) {
        files = fs.readdirSync(p);
        files.forEach(function(file){
            var curPath = path.join(p, file);
            if(fs.statSync(curPath).isDirectory()) {
                deleteFolder(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        try{
            fs.rmdirSync(p);
        }catch(e){

        }
    }
}

db.removeAllAttachment = function () {
    let userId = engine.getApplication().getCurrentApp().getCurrentUser().id;
    deleteFolder(path.join(__dirname,userId));
}

db.readFile = function (filePath) {
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'base64',function (err,data) {
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        });
    })

}

module.exports = db;

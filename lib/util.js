const fs = require("fs");
function Util(){
    function setPath(path){
        this.path = path;
    }
    function getPath(){
        return this.path;
    }
    function getRc(){
        console.log(path);
    }

    function getRc(path){

    }

    function createRc(rc){
        let filename = 
        fs.writeFileSync(path)
    }

    function getRcTemplate(){
        return {
            "FunctionName":"",
            "Region":"",
            "Runtime":"",
            "Handler":"",
            "Role":"",
            "Memory":"",
            "Timeout":"",
            "Description":"",
            "Environment":{
                "DATABASE_URL":"TEST",
            },
            "LambdaIgnores":["*.DS_Store*", "script.sh","script.py","lambda_function.pyc",'.lmbdrc']
        }
    }

    function getEvent(){

    }

    function createApp(){

    }

    function createNode(){

    }

    function createPython(){

    }

    return {
        getRc:getRc,
        createRc:createRc,
        getRcTemplate:getRcTemplate,
        setPath:setPath,
        getPath:getPath
    }
}
module.exports = Util
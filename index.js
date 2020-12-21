const { program } = require('commander');
program.version('0.0.1').name("lmbd").usage("[command] [options]");

const fs = require("fs");
const _path = require("path");
const { cwd } = require('process');



const _cwd = process.cwd();
const Util = require("./lib/util")(_cwd);



program
  .option('-p, --path <value>', 'path of project')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

program
  .command('init')
  .description('Initialize Aws Lambda function, destination default: ./')
  .action(main);

program
  .command('clean')
  .description('Remove lambda archive file')
  .action(main);

program
  .command('build')
  .description('Build Aws Lambda function, destination default: ./')
  .action(main);

program
  .command('deploy')
  .description('Deploy Aws Lambda function, destination default: ./')
  .action(main);

program
  .command('rub-local')
  .description('Deploy Aws Lambda function, destination default: ./')
  .action(main);

program.parse(process.argv);


function main(){
    if(program.path){
        let p = _path.resolve(_cwd,program.path);
        Util.setPath(p);
    }
    switch(program.args[0]){
        case "init":
            init();
            break;
        case "build":
            init();
            break;
        case "clean":
            init();
            break;
        case "deploy":
            init();
            break;
        case "run-local":
            init();
            break;
        default:
            console.log("Invalid Command");
            process.exit();
    }
}

function init(){
    console.log(Util.getPath())
}

function deploy(destination){
    console.log("Deploy called")
}

function build(deestination){

}
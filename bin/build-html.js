const pug=require("pug");
const fs=require("fs");
var fsWriteStream=fs.createWriteStream("../dev-files/index.html")

const compiledFunction = pug.compileFile("./../views/index.pug");

console.log(compiledFunction());


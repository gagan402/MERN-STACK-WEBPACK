var ops=require("os");//os is core module( do not need install,installed while installing node js)


// console.log(ops);
console.log(ops.platform());//win 32
console.log(ops.totalmem());//6323187712
console.log(ops.freemem());//1159630848

console.log(ops.hostname());//DESKTOP-LPRQN7U
console.log(ops.homedir());//C:\Users\gagan
console.log(ops.cpus());//give us array of object  (hardware information)


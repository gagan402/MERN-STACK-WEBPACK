var urll=require("url");//code module
var queryString=require("querystring");//core module


var fullurl="https://realjavaonline.com:80/users/signup.html?uid=banglore&pwd=computer#ggn";
var obj=urll.parse(fullurl);
// console.log(obj);
var qstr=obj.query;
console.log(qstr);//uid=banglore&pwd=computer

var ob=queryString.parse(qstr);
console.log(JSON.stringify(ob));//{"uid":"banglore","pwd":"computer"}

console.log("Welcome "+ob.uid);//Welcome banglore
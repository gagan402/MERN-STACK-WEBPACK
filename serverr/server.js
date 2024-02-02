//http is core module used by express to handle the request
var htp=require("http");
var urll=require("url");
var fs=require("fs");//file system module

var server=htp.createServer(function(req,res)
{
    // res.setHeader("Content-Type","text/html");
    var fullurl=req.url;
    var parsedUrl=urll.parse(fullurl,true);
    // res.write(JSON.stringify(parsedUrl));//only string can be passed
    // console.log(parsedUrl);
    // res.write(parsedUrl.pathname);
    // res.write(JSON.stringify(parsedUrl.query));

    if(parsedUrl.pathname==="/signup")
    {
        // res.write("Do signup Here");
        fs.readFile(__dirname+"/public/signup.html",(err,data)=>
        {
            console.log(data.toString());
            if(!err)
            {
                res.write(data);
            
            }
            else{
                res.write(err.message);
               
            }
            res.end();
            
        })
    }
    else
    if(parsedUrl.pathname==='/login')
    {
        res.write("Do login here");
        res.end();
    }
  
});

server.listen(3004,(err)=>
{
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Server Started!");
    }
});
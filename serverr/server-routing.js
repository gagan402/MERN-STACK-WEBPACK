const express=require("express");
const app=express();
const users=require("./routers/users");
const admin=require("./routers/admin");

app.listen(2005,function(err)
{
    if(!err)
    {
        console.log("Server is Started at port 2005!");
    }
    else
    {
        console.log(err.message);
    }

});
app.use("/userr",users);
app.use("/adminn",admin);
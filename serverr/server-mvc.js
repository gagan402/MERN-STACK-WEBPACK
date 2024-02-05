const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cf=require("./config/dbconfig");
const route=require("./routers/productRouter");


app.use(express.urlencoded({extended:true}));
app.listen(2005,(err)=>
{
    if(!err)
    {
        console.log("Server started at port 2005!");
    }
    else{
        console.log(err.message);
    }
});

const server=cf.dburl;
mongoose.connect(server).then(
    ()=>
    {
        console.log("Connected with mongoDB!");
    }
).catch(
    (err)=>
    {
        console.log(err.message);
    }
);


app.use("/product",route);
app.use("/d-product",route);
app.use("/al-product",route);
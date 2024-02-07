const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cf=require("./config/dbconfig");
const route=require("./routers/productRouter");
const cors=require("cors");
const bodyParser=require("body-parser");
const fileUpload=require("express-fileupload");


app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload());
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

app.use("/pproduct",route);
app.use("/product",route);
app.use("/aproduct",route);
app.use("/d-product",route);
app.use("/al-product",route);
app.use("/u-product",route);
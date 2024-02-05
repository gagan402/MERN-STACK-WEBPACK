const express=require("express");
const mongoose=require("mongoose");


const app=express();
app.use(express.urlencoded({extended:true}));
// typically used in a Node.js application with the Express.js framework to enable the parsing of incoming URL-encoded data from HTML forms.

app.listen(2005,(err)=>
{
    if(!err)
    {
        console.log("Server started at port 2005");
    }
    else{
        console.log(err.message);
    }
})



const server="mongodb://localhost:27017/BCE2024";
mongoose.connect(server)
.then(()=>
{   
    console.log("Connected to mongoDB !");

}).catch(
    (err)=>
    {
        console.log("Not connected to mongoDB !!!"+err.message);
    }
);



//schema: it is a class of mongoose library
let ProductSchema=new mongoose.Schema(
    {
    item:{type:String,required:true,unique:true,index:true},//primary key ,unique
    category:String,
    price:Number,
    dop:{type:Date,default:Date.now}
    },
    {
        versionKey:false  //to avoid __v field intable come by default
    }
);


//model of schema:it is a function
const ProductModel=mongoose.model("products",ProductSchema);//collection name,schema name


app.post("/add-product",(req,res)=>
{
    const doc=new ProductModel(req.body);
    doc.save().then(
        (docu)=>
        {
            res.send(docu);
            console.log("Data saved to mongoDB");
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            res.send(err.message);
        }
    );
});


app.post("/delete-product",(req,res)=>
{
    ProductModel.deleteOne({item:req.body.item})
    .then(
        (result)=>
        {
            res.send(result);
            console.log(result);
        }
    ).catch(
        (err)=>
        {
            res.send(err.message);
            console.log(err.message);
        }
    );

});

app.post("/all-products",(req,res)=>
{
    ProductModel.find().then(
        (results)=>
        {
            console.log(results);
            res.send(results);
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            res.send(err.message);
        }
    );

});

app.post("/one-products",(req,res)=>
{
    ProductModel.find({item:req.body.item}).then(
        (results)=>
        {
            console.log(results);
            res.send(results);
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            res.send(err.message);
        }
    );

});
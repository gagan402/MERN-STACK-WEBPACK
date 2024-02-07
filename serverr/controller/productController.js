var path=require("path");
const {getProductModel}=require("../model/productModel");


const Pmodel=getProductModel();

function doAddProducts(req,res)
{
    // const doc=new Pmodel(req.query);
    const doc=new Pmodel(JSON.parse(req.query.obj));

    doc.save().then(
        (docu)=>
        {
            // res.send(docu);
            res.json({status:"true",rec:docu});
            console.log("Data saved to mongoDB");
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            // res.send(err.message);
            res.json({
                status:false,
                err:err.message
            });
        }
    );
}
function doAddProductsPost(req,res)
{   let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.files.pic.name;
        var fp=path.join(__dirname,"..","uploads",filename);
        req.files.pic.mv(fp);
        console.log(fp);
    }

    req.body.picpath=fp;
    console.log(req.body);


    const doc=new Pmodel(req.body);
    doc.save().then(
        (docu)=>
        {
            // res.send(docu);
            res.json({status:"true",rec:docu});
            console.log("Data saved to mongoDB whole data");
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            // res.send(err.message);
            res.json({ggn:"not added",err:err.message});
        }
    );
}

function ddoAddProducts(req,res)
{
    const doc=new Pmodel(req.body);
    doc.save().then(
        (docu)=>
        {
            // res.send(docu);
            res.json({status:"true",rec:docu});
            console.log("Data saved to mongoDB");
        }
    ).catch(
        (err)=>
        {
            console.log(err.message);
            // res.send(err.message);
            res.json({
                status:false,
                err:err.message
            });
        }
    );
}

function doDeleteProducts(req,res)
{
    Pmodel.deleteOne({item:req.query.item}).then(
        (results)=>
        {
            // res.send(results);
            // if(results.deleteCount==1)
            // {
            // res.json({status:true,res:results});
            // }
            // else{
            // res.json({status:false,message:"item not found"});

            // }
            res.json(results);
            console.log(results);
        }
    ).catch(
        (err)=>{
            res.send(err.message);
            console.log(err.message);
        }
    )

}

function doAllProducts(req,res)
{

    Pmodel.find().then(
        (results)=>
        {
            res.send(results);
            console.log(results);
        }
    ).catch(
        (err)=>
        {
            res.send(err.message);
            console.log(err.message);
        }
    );

}

function doupdateProduct(req,res)
{
    Pmodel.updateOne({item:req.body.item},{$set:{category:req.body.category,price:req.body.price,dop:req.body.dop}})
    .then(
        (results)=>
        {
            res.json({
                updated:true,
                res:results,
                data:req.body
            });
        }
    )
    .catch(
        (err)=>
        {
            res.send(err.message);
            console.log(err.message);
        }
    )
}

module.exports={doAddProducts,doDeleteProducts,doAllProducts,doupdateProduct,ddoAddProducts,doAddProductsPost};
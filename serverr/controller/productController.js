const {getProductModel}=require("../model/productModel");


const Pmodel=getProductModel();

function doAddProducts(req,res)
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
    Pmodel.deleteOne({item:req.body.item}).then(
        (results)=>
        {
            // res.send(results);
            if(results.deleteCount==1)
            {
            res.json({status:true,res:results});
            }
            else{
            res.json({status:false,message:"item not found"});

            }
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

module.exports={doAddProducts,doDeleteProducts,doAllProducts,doupdateProduct};
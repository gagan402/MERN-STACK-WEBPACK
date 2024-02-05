const {getProductModel}=require("../model/productModel");


const Pmodel=getProductModel();

function doAddProducts(req,res)
{
    const doc=new Pmodel(req.body);
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
}


function doDeleteProducts(req,res)
{
    Pmodel.deleteOne({item:req.body.item}).then(
        (results)=>
        {
            res.send(results);
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

module.exports={doAddProducts,doDeleteProducts,doAllProducts};
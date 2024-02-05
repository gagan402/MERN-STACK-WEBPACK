
const mongoose=require("mongoose");
function getProductModel()
{
let ProductSchema= mongoose.Schema(
    {
        item:{type:String,required:true,unique:true,index:true},
        category:String,
        price:Number,
        dop:{type:Date,default:Date.now}
    },
    {
        versionKey:false
    }
);


let ProductModel=mongoose.model("products",ProductSchema);


return ProductModel;
}
module.exports={getProductModel};
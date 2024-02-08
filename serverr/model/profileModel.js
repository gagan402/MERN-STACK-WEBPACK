const mongoose=require("mongoose");
function getProfileModel()
{
const profileschema=new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true,index:true},
        name:{type:String,required:true},
        picpath:String
    }
);

let profileModel=mongoose.model("profile",profileschema);

return profileModel;

}

module.exports={getProfileModel};
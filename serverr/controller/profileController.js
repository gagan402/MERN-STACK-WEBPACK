const {getProfileModel}=require("../model/profileModel");
const path=require("path");
const pm=getProfileModel();

function doAddProfile(req,res)
{
    let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.body.email+"-"+req.files.pic.name;
        var fp=path.join(__dirname,"..","uploads",filename);
        req.files.pic.mv(fp);
        console.log(fp);
    }
    req.body.picpath=filename;

    const pp=new pm(req.body);

    pp.save().then(
        (results)=>
        {
            res.json({ggn:"profile saved",rec:results});
        }
    ).catch(
        (err)=>
        {
            res.json({err:err.message});
        }
    );


}

function doSearchProfile(req,res)
{
    pm.findOne({email:req.body.email})
    .then(
        (results)=>
        {
            console.log(results);
            res.json(results);
        }
    ).catch(
        (err)=>
        {
            res.json({err:err.message})
        }
    );


}

function doUpdateProfile(req,res)
{
    let filename="nopic.jpg";
    if(req.files!=null)
    {
        filename=req.body.email+"-"+req.files.pic.name;
        var fp=path.join(__dirname,"..","uploads",filename);
        req.files.pic.mv(fp);
        console.log(fp);
    }
    req.body.picpath=filename;

  
    pm.findOneAndUpdate({email:req.body.email},{$set:{name:req.body.name,picpath:req.body.picpath}})
    .then((results)=>
    {
        res.json({status:true,res:results});
    }).catch(
        (err)=>
        {
            console.log(err.message);
            res.json({err:err.message});
        }
    );

}

module.exports={doAddProfile,doSearchProfile,doUpdateProfile};
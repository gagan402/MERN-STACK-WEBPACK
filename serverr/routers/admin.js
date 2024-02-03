const express=require("express");
const router=express.Router();
router.get("/allusers",(req,res)=>
{
    console.log("All Users!");
    res.send("All Users!")
});

router.get("/block",(req,res)=>
{
    console.log("User Blocked !");
    res.send("User Blocked !");
})


module.exports=router;
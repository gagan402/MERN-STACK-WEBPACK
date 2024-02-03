const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/",(req,res)=>
{
   console.log("User Page");
   const p=path.join(__dirname,"..","/public/signup.html")
   res.sendFile(p);
});
router.get("/signup",(req,res)=>
{
    console.log("Sign Up!");
    res.send("Sign Up!")
});

router.get("/login",(req,res)=>
{
    console.log("Login ");
    res.send("Login ");
})


module.exports=router;
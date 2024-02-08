const express=require("express");
const {doAddProfile,doSearchProfile,doUpdateProfile}=require("../controller/profileController");
const router=express.Router();

router.post("/add-profile",doAddProfile);
router.post("/search-profile",doSearchProfile);
router.post("/update-profile",doUpdateProfile);

module.exports=router;
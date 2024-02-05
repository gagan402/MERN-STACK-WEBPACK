const express=require("express");
const {doAddProducts,doDeleteProducts,doAllProducts}=require("../controller/productController");
const router=express.Router();

router.post("/add-product", doAddProducts);
router.post("/delete-product",doDeleteProducts);
router.post("/all-product",doAllProducts);


module.exports=router;
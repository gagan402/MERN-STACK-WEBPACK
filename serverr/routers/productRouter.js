const express=require("express");
const {doAddProducts,doDeleteProducts,doAllProducts,doupdateProduct,ddoAddProducts,doAddProductsPost}=require("../controller/productController");
const router=express.Router();

router.get("/add-product", doAddProducts);
router.post("/aadd-product", doAddProductsPost);
router.post("/add-pproduct",ddoAddProducts)
router.get("/delete-product",doDeleteProducts);
router.post("/all-product",doAllProducts);
router.post("/update-product",doupdateProduct);

module.exports=router;
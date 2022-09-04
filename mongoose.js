const mongoose=require("mongoose");

const Product=require("./models/product");

mongoose.connect("mongodb+srv://ebi:YCxwvFoE5wBOM2rx@cluster0.im2jyir.mongodb.net/products_test?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Connected to database")
    }).catch(()=>{
    console.log("Connected failed")
})

const createProduct=async(req,res,next)=>{
    const createdProduct=new Product({
        name:req.body.name,
        price:req.body.price
    });
    const result=await createdProduct.save();
    res.json(result)
};


exports.createProduct=createProduct;
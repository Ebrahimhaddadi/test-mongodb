const MongoClient = require('mongodb').MongoClient;

const url ='mongodb+srv://ebi:YCxwvFoE5wBOM2rx@cluster0.im2jyir.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price
    };
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({message: 'Could not store data.'});
    }
    setTimeout(() => {client.close()}, 3000)

    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client=new MongoClient(url);
    let products;
    try{
      await client.connect();
      const db=await client.db();
       products=await db.collection("products").find().toArray()
    }catch (error) {
     return  res.json({message:"could not found prodcts"})
    }
    setTimeout(() => {client.close()}, 3000)
    res.json(products)

};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
